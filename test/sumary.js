document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block";


// In HTML, JavaScript code is inserted between <script> and </script> tags.
function name(){
    // function stuff
}
// Js code can be in the head, body, .js file
<script src="file name or path"></script>


//Writing into an HTML element, using 
innerHTML
//Writing into the HTML output using 
document.write() //Using document.write() after an HTML document is loaded,
                    //will delete all existing HTML:
//Writing into an alert box, using 
window.alert()
//Writing into the browser console, using 
console.log()
// to print with your printer
window.print()


// never forget ;
// white spaces dont matter


// How to create variables:
var x;
let y;
// How to use variables:
x = 5;
y = 6;
let z = x + y;
/*this is also a comment*/


// declare variable
var car_name;
//assign value
car_name = "Volvo";
// both can be combined
var car_name = "Volvo";
// you can declare multiple variable with one var statement
var person = "John Doe",
carName = "Volvo",
price = 200;
// variables can be redeclared without lossing their value.
var car_name
// If you put a number in quotes, the rest of the numbers will be 
// treated as strings, and concatenated.
var x = 2 + 3 + "5"; // x = "55"
// You can use the variable before it is declared
carName = "Volvo";
var carName;


//Variables defined with let cannot be Redeclared.
let car_size = 10; 
//Variables defined with let must be Declared before use.
//Variables defined with let have Block Scope.


//Variables defined with const cannot be Redeclared.
//Variables defined with const cannot be Reassigned.
//Variables defined with const have Block Scope.
const PI = 3.14159265359;
//JavaScript const variables must be assigned a value when they are declared
//as a general rule, always declare a variable with const unless you know
// that the value will change.

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";


//The assignment operator (=) assigns a value to a variable.
let x = 5; 
// classic algebra + - * / ** % ++ --
Math.pow(x,y) == x**y;
//asignment operators assign values to JavaScript variables.
x += 2; //works with all operators

// ==	equal to
// ===	equal value and equal type
// !=	not equal
// !==	not equal value or not equal type
// >	greater than
// <	less than
// >=	greater than or equal to
// <=	less than or equal to
// ?	ternary operator

// typeof	Returns the type of a variable
// instanceof	Returns true if an object is an instance of an object type


let length = 16;                               // Number
let lastName = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};    // Object
// Js types are dynamic
let x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String
// sci number suported
let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123
// boolens
let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
// typeof
typeof "John"         // Returns "string"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"


// functions (domagic)
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
  }


//objetcts
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
// value are accesible with
objectName.propertyName
//or
objectName["propertyName"]
//objects can have function inside of them (like python class)
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
fullName()


// Events HTML
//An HTML event can be something the browser does, or 
// something a user does.
// <element event="some JavaScript">
<button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
//this. executes on this element
<button onclick="this.innerHTML = Date()">The time is?</button>

// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page


// to get a string lenght
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
// //escape characters
// \'	'	Single quote
// \"	"	Double quote
// \\	\	Backslash

// // other escape sequences
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator


// string methods
slice() //extracts a part of a string and returns the extracted 
        //part in a new string.
substr() //is similar to slice().
    //The difference is that the second parameter specifies 
    //the length of the extracted part.
substring() //is similar to slice().
    //The difference is that substring() cannot accept negative indexes.

//The replace() method replaces a specified value with another 
//value in a string:
//By default, the replace() method replaces only the first match
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
//To replace case insensitive, use a regular expression with 
//an /i flag (insensitive):
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");
//To replace all matches, use a regular expression with 
//a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

// con,vert a string to uppercase
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLocaleLowerCase();

// concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

//removes the withe spaces from both sides
let text1 = "      Hello World!      ";
let text2 = text1.trim();

//to add padding to a string
let text = "5";
let padded = text.padStart(4,0); // at the beginnig of the string
let padded = text.padEnd(4,0);   // at the end of the string

// to get the a character at a given index
let text = "HELLO WORLD";
let char = text.charAt(0);
// same thing but with the unicode value
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
// to acces on char of a string
let text = "HELLO WORLD";
let char = text[0];     // a litle unpredictible

//to split a string with a given character to an array
let text = "hello, hi"
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
// if it the separator is "" the out put will be list of characters
text.split("")


// eturns the index of (the position of) the first occurrence 
// of a specified text in a string
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");

//returns the index of the last occurrence of a specified text in a string
let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");

// both can accept a second atgument for the start index of the search
let str = "Please locate where 'locate' occurs!";
str.indexOf("locate", 15);

// .searcj does the samme thing but:
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search 
        //values (regular expressions).
let str = "Please locate where 'locate' occurs!";
str.search("locate");

//The match() method searches a string for a match against a regular 
// expression, and returns the matches, as an Array object.
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g); // returns [ain,ain,ain]

//The includes() method returns true if a string contains a specified value
// as second parrameter tou can give a starting index
let text = "Hello world, welcome to the universe.";
text.includes("world",3);


//returns true if a string begins with a specified value, otherwise false
// a staring index can also be given
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello",3);

//returns true if a string ends with a specified value, otherwise false
var text = "John Doe";
text.endsWith("Doe");


// template literal is a way to make strings
let text = `Hello World!`;
// supports multiline
let text =
`The quick
brown fox
jumps over
the lazy dog`;
// can incorporate variables
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`;

// you can also make html templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}
html += `</ul>`;


//floating arithmetic is not always correct
let x = 0.2 + 0.1; // != 0.3
// To remedi the problem jeut multiply and divide by 10
let x = (0.2 * 10 + 0.1 * 10) / 10;

// NaN is a JavaScript reserved word indicating that 
//a number is not a legal number.

// NaN is a JavaScript reserved word indicating that a number
// is not a legal number.
let x = 100 / "Apple";
isNaN(x);

// if you calculate a number outside the largest possible number.
// Infinity (or -Infinity) is the value JavaScript will return 
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}
//dividing by zerro also generates Infinity
let x =  2 / 0;
let y = -2 / 0;

// Js interprets number as hex if 0x preceds it
let x = 0xFF;

// you can use this function to convert anny given number in any base
let myNumber = 32;
myNumber.toString(10);
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(8);
myNumber.toString(2);

// Normally JavaScript numbers are primitive values created from literals
// But numbers can also be defined as objects with the keyword new:
let y = new Number(123);
// Do not create Number objects. baceuse bad

// The toString() method returns a number as a string.
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

// gives the sci notation as string of a number
// the parameter is the presision of the out put number
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

// toFixed() returns a string, with the number written 
// with a specified number of decimals:
let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

// toPrecision() returns a string, with a number written 
// with a specified length:
let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

// can be used to convert JavaScript variables to numbers
Number(true);
Number(false);
Number("10");
// Number() can also convert a date to a number.
Number(new Date("1970-01-01"))
// The Number() method returns the number of milliseconds since 1.1.1970.

// parseInt() parses a string and returns a whole number
parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
// samme thing but with floating point number
parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");

// get the maximal number possible in js
let x = Number.MAX_VALUE;
// Same but min value
let x = Number.MIN_VALUE;


// to acces array elements
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";
// you can change an arrey element with
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";
// the type of an array is object
const cars = ["Saab", "Volvo", "BMW"];
const x = typeof cars // output will be object

// You can have objects in an Array. You can 
// have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
// to get an array lenght
cars.length()

// looping through an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit_Len = fruits.length;

text = "<ul>";
for (let i = 0; i < fruit_Len; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
// ou can also use the Array.forEach() function:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// Addign ellements to an array
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
// Alternative with length method
const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits

// alterative array creating methode (not recomended)
const points = new Array();

// to check if an array is an array
const fruits = ["Banana", "Orange", "Apple"];
Array.isArray(fruits);  //true

// The instanceof operator returns true if an object 
// is created by a given constructor
const fruits = ["Banana", "Orange", "Apple"];
fruits instanceof Array;


// e JavaScript method toString() converts an array 
// to a string of (comma separated) array values
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

// It behaves just like toString(), but in addition you can 
// specify the separator:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
// ressult : Banana * Orange * Apple * Mango

// The pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

// The push() method adds a new element to an array (at the end)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

// method removes the first array element and "shifts" all other elements 
// to a lower index
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

// adds a new element to an array (at the beginning), and "unshifts" 
// older elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

// delets a item DO NOT USE because it creates undeined holes
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

// to merge two lists
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
// The concat() method can also take strings as arguments:
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

// can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// The first parameter (2) defines the position where new elements 
// should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new 
// elements to be added

//  you can use the splice methode to safely remove list elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // "Bannanas" will be removed

// can be used to extract a part fromm the array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);


// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sorted_frutis = fruits.sort();
// You can also pass as an argument a function to sort numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// This works because the sorting alg is comparing two values to sort
// To sor randomly
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
// The Fisher Yates Method
// The array.sort method isn't quite accurate  for our random sort
// this is why we have this Alternative
const points = [40, 100, 1, 5, 25, 10];
for (let i = points.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}
// If you want to sort an array of objects
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
cars.sort(function(a, b){return a.year - b.year});

// The reverse() method reverses the elements in an array.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

// To find the max value of an array
const numbers = [1,2,8,9,8,8,7,5]
let max = Math.max.apply(null, arr);
// To find min
const numbers = [1,2,8,9,8,8,7,5]
let max = Math.min.apply(null, arr);



// The map() method creates a new array by performing a 
// function on each array element
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
} // note thate function uses 3 values

// The filter() method creates a new array with array elements 
// that passes a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

// he reduce() method runs a function on each array element to produce (
// reduce it to) a single value
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
function myFunction(total, value, index, array) {
  return total + value;
} // this will give us the summ of all elements
// This method can also accept an initial value
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);
function myFunction(total, value) {
  return total + value;
}
// The reduce right function works exactly the same but the lis is reversed
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction, 100);
function myFunction(total, value) {
  return total + value;
}

// The every() method check if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} // output is going to be Flase

// The some() method check if some array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}  // output is going to be false

// The switch statement is used to perform different actions based 
// on different conditions.
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";

    // The default keyword specifies the code to run if there is no case 
    // match:
  default:
    day = Nan;
    break;
}

// if cases bhave tehe same output they can be combined in the folowing
// way
switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}


// the if statement
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}


// for loop
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
// Statement 1 is executed (one time) before the execution of 
// the code block.
// Statement 2 defines the condition for executing the code block.
// Statement 3 is executed (every time) after the code block has 
// been executed.


// he JavaScript for in statement loops through the properties of 
// an Object:
const person = {fname:"John", lname:"Doe", age:25};
let text = "";
for (let x in person) {
  text += person[x];
}
// An iterator can also be used
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value;
}


// The JavaScript for of statement loops through the values of an 
// iterable object.
const cars = ["BMW", "Volvo", "Mini"];
let text = "";
for (let x of cars) {
  text += x;
}

// The while loop loops through a block of code as long as a 
// specified condition is true.
while (i < 10) {
  text += "The number is " + i;
  i++;
}

// The do while loop is a variant of the while loop. This loop will
// execute the code block once, before checking if the condition is
// true, then it will repeat the loop as long as the condition is true.
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);



// ________________HTML tables______________



// <!-- (A) ALL WE NEED IS A <DIV> CONTAINER -->
// <div id="container"></div>
 
// <script>
// (B) DUMMY ARRAY
var data = ["doge", "cate", "birb", "doggo", "moon moon", "awkward seal"];

// (C) CREATE HTML TABLE
// (C1) HTML TABLE ELEMENT
var myTable = document.createElement("table"),
    row = myTable.insertRow(), cell;



// (C2) LOOP THROUGH ARRAY & GENERATE ROWS-CELLS
var perrow = 2; // 2 CELLS PER ROW
data.forEach((value, i) => {
  // ADD CELL
  cell = row.insertCell();
  cell.innerHTML = value;
 
  // CLICK ON CELL TO DO SOMETHING
  // cell.onclick = FUNCTION;
 
  // TO PASS IN A RUNNING NUMBER OR PARAMETER
  // cell.onclick = () => { console.log(i); };
 
  // BREAK INTO NEXT ROW
  var next = i + 1;
  if (next%perrow==0 && next!=data.length) { row = myTable.insertRow(); }
});

// (D) ATTACH TABLE TO CONTAINER
document.getElementById("container").appendChild(myTable);



myTable = document.createElement("table"); //Create a new HTML table –
// Add a new row to the table – 
row = myTable.insertRow();
// Add cells to the row –
cell = row.insertCell();
// Append data to the cell –
cell.innerHTML = DATA;



// Find a <table> element with id="myTable":
var table = document.getElementById("myTable");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();

// Create an empty <tr> element and add it to the first position of <thead>:
var row = header.insertRow(0);    

// Insert a new cell (<td>) at the first position of the "new" <tr> element:
var cell = row.insertCell(0);

// Add some bold text in the new cell:
cell.innerHTML = "<b>This is a table header</b>";




// ___________________WEB API_________________

// he Web History API provides easy methods to access the 
// windows.history object.

// The window.history object contains the URLs (Web Sites) visited 
// by the user.

// The go() method loads a specific URL from the history list:
function myFunction() {
  window.history.go(-2);


// A web worker is a JavaScript running in the background, without
//  affecting the performance of the page.
let i = 0;
function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",500);
}
timedCount();

if (typeof(w) == "undefined") {
  w = new Worker("demo_workers.js");
}

w.onmessage = function(event){
  document.getElementById("result").innerHTML = event.data;
};

// to terminate a web worker and yo free up resources
w.terminate();


// The Fetch API interface allows web browser to make HTTP requests to 
// web servers.
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
// Since Fetch is based on async and await, the example above might be 
// easier to understand like this:
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  myDisplay(myText);
}