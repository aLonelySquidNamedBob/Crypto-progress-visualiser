
function real_time (UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour ;
    return time;
  }

function data_filter(request,wallet,wallet_visualisation) {
    let data = [];
        let tokens = [];
        for (let transaction of request["result"]) {
            const filtered = {
                time : transaction["timeStamp"],
                date_time : real_time(transaction["timeStamp"]),
                value : transaction["value"] / (10 ** transaction["tokenDecimal"]),
                token : transaction["tokenSymbol"],
                from : transaction["from"],
                to : transaction["to"]
            }
            if (filtered["from"] === wallet) {
                filtered["from"] = wallet_visualisation;
            }
            if (filtered["to"] == wallet) {
                filtered["to"] = wallet_visualisation;
            }
            if (tokens.includes(filtered["token"]) === false) {
                tokens.push(filtered["token"]);
            }
            data.push(filtered);
        }

        // _______ step 2 : cleaning up multiple transactions________

        const max_time_fluctuation = 7;
        let j = 0;
        let summed_value = 0;
        for (let i = 0 ; i < data.length - 1; i++) {
            // combines if same value, short interval
            if (data[i]["value"] === data[i+1]["value"] && data[i+1]["time"] < data[i]["time"] + max_time_fluctuation ) {
                j = i;
                while (j <= data.length-1 && data[i]["value"] === data[j]["value"] && data[j]["time"] < data[i]["time"] + max_time_fluctuation) {
                    j++;
                }
                data[i]["value"] = data[i]["value"] * (j - i);
                data[i]["from"] = data[i]["token"] + " node";
                data.splice(i + 1, j-i-1);
            }
            
            // combines if samme sender and reciver in an short interval
            else if (data[i]["from"] === data[i+1]["from"] && data[i]["to"] === data[i+1]["to"] && data[i]["token"] === data[i+1]["token"] && data[i+1]["time"] < data[i]["time"] + max_time_fluctuation ) {
                j = i;
                summed_value = 0;
                while (j <= data.length-1 && data[i]["from"] === data[j]["from"] && data[i]["to"] === data[j]["to"] && data[i]["token"] && data[i]["token"] === data[i+1]["token"] && data[i+1]["time"] < data[i]["time"] + max_time_fluctuation ) {
                    summed_value += data[j]["value"];
                    j++;
                }
                data[i]["value"] = summed_value;
                console.log(data.splice(i + 1, j-i-1));
                console.log("combined a transaction")
            }
        } 


        // _______ step 3 : ballance traker____________

        // generate an empty dictionarry with the token names as keys
        let token_value = {};
        for (token of tokens) {
            token_value[token] = 0;
        }
        // add colums to data showing the balance of every owned coin 
        // loop through data
        for (let i = 0; i < data.length ; i++) {
            // finds the corresponding value and adjust the global balance 
            for (token of tokens) {
                if (token === data[i]["token"]) {
                    if (data[i]["to"] ===  wallet_visualisation) {
                        token_value[token] += data[i]["value"]; 
                    }
                    else if (data[i]["from"] ===  wallet_visualisation) {
                        token_value[token] -= data[i]["value"]; 
                    }
                }
                data[i][token] =  token_value[token];
            }
        }
        return data
}
    
function generate_table(data,container_id) {
    // intiate the table
    var my_table = document.createElement("table"),
    row = my_table.insertRow(), cell;
    // creating an array of object keys
    var keys = Object.keys(data[0]);
    // create table headers
    header = my_table.createTHead();
    row = header.insertRow();
    var keys = Object.keys(data[0]);
    for (key of keys) {
    cell = row.insertCell();
    cell.innerHTML = key;
    }
    // fill table
    let non_numerical_keys = ["from","to","token","time"] 
    for (transaction of data) {
        row = my_table.insertRow();
        for (key of keys) {
            cell = row.insertCell();
            // if (non_numerical_keys.includes(key)) {
            //     cell.innerHTML = transaction[key];
            // }
            // else {                                                   // if you wanted to round the displayed numbers
            //     cell.innerHTML = transaction[key].toFixed(3); 
            // }
            cell.innerHTML = transaction[key];

        }
    }
    document.getElementById(container_id).innerHTML = "";
    document.getElementById(container_id).appendChild(my_table);
}






async function make_ecr_20_request(wallet) {
    const api_key = "8VIFH3NXQJ4U57WKWD8MEU2HSWM49FCAR7";
    const api_request = `https://api.etherscan.io/api?module=account&action=tokentx&address=${wallet}&offset=100&sort=asc&apikey=${api_key}`;
    
    const response = await fetch(api_request)
    if (response.status === 200) {
        const data = await response.json();
        return data
    }
    else {
        console.log("error code" + response.status);
        }
}

async function ecr_20_table(wallet) {

    awallet = wallet.toLowerCase();
    const wallet_visualisation = "your wallet"

    const request = await make_ecr_20_request(awallet);
    let data = data_filter(request,awallet,wallet_visualisation);
    generate_table(data,"ecr_20_container");
}






async function make_bep_20_request(wallet) {
    const api_key = "623U6HUF8VD1T61VWSY5HV4IK6G734UC21";
    const api_request = `https://api.bscscan.com/api?module=account&action=tokentx&address=${wallet}&offset=100&sort=asc&apikey=${api_key}`;
    
    const response = await fetch(api_request)
    if (response.status === 200) {
        const data = await response.json();
        return data
    }
    else {
        console.log("error code" + response.status);
        }
}

async function bep_20_table(wallet) {

    let awallet = wallet.toLowerCase();
    const wallet_visualisation = "your wallet"

    const request = await make_bep_20_request(awallet);
    let data = data_filter(request,awallet,wallet_visualisation);
    generate_table(data,"bep_20_container");
}






async function make_erc_20_request(wallet) {
    const api_key = "BX18VD6MMYR7Q9VXH6XDD61Q295R65QPYG";
    const api_request = `https://api.snowtrace.io/api?module=account&action=tokentx&address=${wallet}&offset=100&sort=asc&apikey=${api_key}`;
    
    const response = await fetch(api_request)
    if (response.status === 200) {
        const data = await response.json();
        return data
    }
    else {
        console.log("error code" + response.status);
        }
}

async function erc_20_table(wallet) {

    let awallet = wallet.toLowerCase();
    const wallet_visualisation = "your wallet"

    const request = await make_erc_20_request(awallet);
    let data = data_filter(request,awallet,wallet_visualisation);
    generate_table(data,"erc_20_container");
}







async function make_erc_20_fantom_request(wallet) {
    const api_key = "CXP69TWTKJIQVACD8UJYQ2R94NPHFBIHNX";
    const api_request = `https://api.ftmscan.com/api?module=account&action=tokentx&address=${wallet}&offset=100&sort=asc&apikey=${api_key}`;
    
    const response = await fetch(api_request)
    if (response.status === 200) {
        const data = await response.json();
        return data
    }
    else {
        console.log("error code" + response.status);
        }
}

async function erc_20_fantom_table(wallet) {

    let awallet = wallet.toLowerCase();
    const wallet_visualisation = "your wallet"

    const request = await make_erc_20_fantom_request(awallet);
    let data = data_filter(request,awallet,wallet_visualisation);
    generate_table(data,"erc_20_fantom_container");
}





async function make_erc_20_polygon_request(wallet) {
    const api_key = "VECUQHTTFZ4TDXTC41H9PKR98M6XSYDCCR";
    const api_request = `https://api.polygonscan.com/api?module=account&action=tokentx&address=${wallet}&offset=100&sort=asc&apikey=${api_key}`;
    
    const response = await fetch(api_request)
    if (response.status === 200) {
        const data = await response.json();
        return data
    }
    else {
        console.log("error code" + response.status);
        }
}

async function erc_20_polygon_table(wallet) {

    let awallet = wallet.toLowerCase();
    const wallet_visualisation = "your wallet"

    const request = await make_erc_20_polygon_request(awallet);
    let data = data_filter(request,awallet,wallet_visualisation);
    generate_table(data,"erc_20_polygon_container");
}




async function all_20_table(wallet) {
    ecr_20_table(wallet);
    erc_20_table(wallet);
    bep_20_table(wallet);
    erc_20_fantom_table(wallet);
    erc_20_polygon_table(wallet);
}


function draw_chart(canvas) {
    const Chart = require("chart.js");
    
    // the data for the chart
    const labels = Utils.months({count: 7});
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    
    // configuration of chart type
    const config = {
        type: 'line',
        data: data,
    };

    // intiating the chart
    const myChart = new Chart(canvas,config);
}


async function draw_ecr_chart(wallet) {

    let awallet = wallet.toLowerCase();
    const wallet_visualisation = "your wallet"

    const request = await make_erc_20_polygon_request(awallet);
    let data = data_filter(request,awallet,wallet_visualisation);
    draw_chart("ecr_20_canvas");
}