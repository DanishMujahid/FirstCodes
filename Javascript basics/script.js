//learning basics of JavaScript

console.log ("Hello from JavaScript"); 

//Data Types and Variables
var myName = "Danish";

myName = "Dan";

let ourName = "Danish";

const pi = 3.14;

//Storing values with Assignment operator
var a;
var b = 2;
console.log(a)

a = 7;

b = a;

console.log(a)

//Intialing Variables with Assignment Operator
var a = 9;
//declaring and initalising

//Uninitialised variables
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c +" String!";
//case sensitive
//Declarations
var studLyCapVar;
var properCamelCase;
var titleCaseOver;

//Assignments
studLyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Adding numbers
var sum = 10 + 0;
var sum = 10 + 10;
console.log(sum)

//Subtracting numbers
var difference = 45 - 0;
var difference = 45 - 22;

//Multiplying numbers
var product = 45 * 1;
var product = 45 * 2;

//Dividing numbers
var quotient = 66 / 33;

//Increment number
var myVar = 87;

myVar++;

//myVar = 88

//Decrement number
var myVar = 11;

myVar--;
//myVar = 10

//Decimal numbers
var ourDecimal = 5.7;

var myDecimal = 0.56;

//Multipling decimals(float numbers)

var product = 2.0 * 1.0;

//Divide Decimals

var quotient = 4.4 / 2.0;

// finding a remainder;

var remainder;
remainder = 11 % 3;
// 11/3=3 remainder: 2

// Compound Assignment with Augmented Addition

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
b = 9 + b;
c = c + 7;

// The same as doing because a plus 12 equals

a += 12;
b += 9;
c += 7;

// Compound Assignment with Augmented Subtraction

var a = 11;
var b = 9;
var c = 3;

a = a - 6;
b = b - 15;
c = c - 1;
// The same as doing because c minus equals 1

a -= 6;
b -= 15;
c -= 1;

// Compound Assigment with augmented multiplication
var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
b = b * 3;
c = c * 10;

// The same as doing because a Times equals

a *= 5;
b *= 3;
c *= 10;

// Compound Assignment with Augmented Division
var a = 20;
var b = 56;
var c = 90;

a = a / 2;
b = b / 4;
c = c / 9;

// The same as doing because c divided equals

a /= 2;
b /= 4;
c /= 9;

//Declaring string variables
var firstName = "Danish";
var lastName = "Mujahid";

//Escaping literal quotes
//This will not work
// var myStr = "I am a "double quoted" string inside "double quotes"";
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
//This allows to escape the quotes and the sentance will read
// I am a "double quoted" string inside "double quotes".

//Quoting strings with single quotes
//This will not work
//var myStr = <a href=\"http://www.example.com\" target=/_blank\">link</a";
var myStr = '<a href="http://www.example.com" target=_"blank">link</a'; //Can use single quotes
var myStr = `'<a href="http://www.example.com" target=_"blank">link</a'`; //Can use back ticks

//Escape Sequences

/**
CODE OUTPUT
\' single quote
\ " double quote
\\ backslash
\n new line
\r carriage return
\t new tab
\b backspace
\f form feed
 */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
/** Equal to First line
    \SecondLine
    ThirdLine */

// Concatenating strings with plus Operator

let ourStr = "I come first. " + "I come second.";

let myStr = "This is the start. " + "This is the end.";
//Will print
//"This is the start. This is the end."

//Concatenating strings with plus equals operator

var ourStr1 = "I come first. ";
ourStr1 += "I come second.";

//"I come first. I come second."

var myStr1 = "My name is Danish, ";
myStr1 += "and I love coding!";

//"My name is Danish, and I love coding!"

//Constructing strings with variables

let ourName1 = "Danish";
let thisString = "Hello, my name is " + ourName1 + ", how are you?";
// "Hello, name is Danish, how are you?"

let ourName2 = "Sadia"
let thisString1 = "Hello, I am " + ourName2 + ", and I stink badly.";
// "Hello, I am Sadia, and I stink badly.

// Appending variables to strings
let anAdjective = "cool!";
let ourStr2 = "I am so ";
ourStr2 += anAdjective;

// "I am so cool!"




























