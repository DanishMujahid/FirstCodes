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

// find length of string
let firstNameLength = 0;
let firstName1 = "Danish";

firstNameLength = firstName.length;

let lastNameLength = 0;
let lastName1 = "Coding";

lastNameLength = lastName.length;
// '6'

//Bracket notation to find first character in string
let firstLetterOfFirstName = "";
let firstName = "Sadia";

firstLetterOfFirstName = firstName[0];
// "S"

let firstLetterOfFirstName1 = "";
let firstName = "Danish";

firstLetterOfFirstName2 = firstName[0];
// "D"

// String immmutability

let myStr2 = "Jello, World";
//myStr2[0] = "H" //Will result in error as letters cannot be changed however, the string can be reassigned completely.
myStr2 = "Hello, World";

// Bracket notation to find Nth Character in string
let firstName3 = "Danish";
let secondLetterOfFirstName = firstName3[2];
// "n"

let lastName3 = "Mujahid";
let thirdLetterOfLastName3 = lastName3[2];
//"j";

//Bracket notation to find last character in string
let myName = "Danish";
let lastLetterOfMyName = myName[myName.length-1];
//"h"

//Bracket notation to find Nth - to - last character in string
let thisName = "Danish";
let thirdLetterOfThisName = thisName[thisName.length -3];
// this works because (thisName.length = (0,1,2,3,4,5) D,A,N,I,S,H - 3 = D,A,N,'I')

//Word blanks
result += "My " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
//prints "My big dog ran to the store quickly"

// Store multiple values in arrays
// Arrays allow you to store several pieces of data in one place.
let ourArray = ["John", 23];

let myArray = [Danish, 23];

//Nested array
let thisArray = [["Danish", 23], ["Sadia", 16]];
//This array has two elements inside the same array\

//Access array data
let numArray = [10, 20, 30];
let myData = numArray[0];
// '10'

let numArray1 = [50, 60, 70];
let myData2 = [1];
// '60'

//Modify Array data with indexes
let thisArray1 = [18, 45, 99];
thisArray1[1] = 27;
// 45 is now 27. [18, 27, 99]

let thisArray2= [82, 292, 849];
thisArray2[2] = 38;
// 849 is now 38. [82, 292, 38]

//Access Multi-Dimensional Arrays with indexes
let threeDArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[[10, 11, 12], [13, 14, 15], 16, 17]];
let myData3 = threeDArray[0][0];
// first index array, first value of that array = '1'
// [2][1] = '8'
// How to access other array??

// Manipulate Arrays with push()
let myArray1 = ["Danish", 23];
myArray1.push(["Happy", "Joy"]);
// myArray1 now equals ["Danish", 23, ["Happy, "Joy"]],
let myArray2 = [["Danish", 23], ["Faheem", 22]];
myArray2.push(["Dog", "Lover"]);

//Manipulate Arrays with pop()
let popArray = [1, 2, 3];
let removedFromPopArray = popArray.pop();
//This removes '3' and now the array is [1, 2]

let popArray1 = [[39, 42, 98], ["Danish", 23]];
let removedFromPopArray1 = popArray1.pop();
// Array is now [39, 42, 98]

//Manipulate Arrays with Shift()
let shiftArray = ["Danish", 23, "Handsome"];
let removedFromShiftArray = shiftArray.shift();
//This now equals [23, "Handsome"] removes first element.
let shiftArray1 = ["Sadia", 16, "Little shit"];
let removedFromPopArray2 = shiftArray1.shift();

//Manipulate arrays with unshift()
let unShiftArray = ["Danish", 23, "Stupid"];
unShiftArray.shift();
unShiftArray.unshift("Faheem");
// ["Faheem", 23, "Stupid"];

let thisArray3 = ["Peter", "S", "Cummins"]
thisArray3.shift();
thisArray3.unshift("Tom");
// ["Tom", "S", "Cummins"]

let thisArray4 = [["Jacob", 23], ["Oliver", 23]];
thisArray4.shift();
thisArray4.unshift("Ashraf", 23);
// [["Ashraf", 23], ["Oliver", 23]];

//Shopping list
let myShoppingList = [["Cereal", 3], ["Eggs", 6], ["Bread", 1], ["Chicken", 2]];
//Created an array of arrays.

//Write Reusable code with functions
function ourReusable





















// 
//console.log("Hello world");

let greeting1 = "Hello " + "Danish";
console.log(greeting1);

const dayOfTheWeek = "Tuesday";

if (true) {
console.log("Condition 1 is true")
}

if (false) {
console.log("Condition 2 is true")
}

console.log("Hello" === "Hello")

console.log(10 < 20);

console.log(1 + 1 !== 2);

if (5 > 2) {
console.log("Condition is true")
}

console.log(1 === "1");

console.log(1 == "1");

const isSleepy = false;
const time = 2000;
const isBedTime = time >= 2100;

if (isSleepy) {
console.log("Let's sleep now because I'm sleepy")
} else if (isBedTime) {
console.log("Let's sleep now because it's bedtime")
} else {
console.log("Let's sleep later")
}

//if (isSleepy) = true;
//const time = 2200
//const isBedtime = time >= 2100

//if (isSleepy && isBedTime) {
//console.log(Let's sleep now)
//} else 
//console.log(Let's sleep later)

//

const dogNames = ['Max', 'Fido', 'Mutley'];
//console.log(dogNames[0]);
//console.log(dogNames.length)

//dogNames.push('Kev')
//console.log(dogNames.length)

//console.log(dogNames);

dogNames.shift()
console.log(dogNames)

const nestedLetters = [
['a', 'b', 'c'],
['d,', 'e', 'f'],
];

//console.log(nestedLetters.length)

const firstLetters = nestedLetters[0];
const secondLetters = nestedLetters[1];
console.log(nestedLetters[1]);
console.log(nestedLetters[0][0]);

console.log(firstLetters[0])

//Iternation
//repetition of a particular task
//performed on a different value each time
//used when we want to perform certain tasks

//console.log("Doing task number 1")
//console.log("Doing task number 2");


//for (let task = 1; task <= 5; task += 1) {
//console.log('Doing task number ' + task)
//}

let dogNames1 = ["Obi", "Penny", "Mac", "Misty"]

for (let i = 0; i < dogNames1.length; i++) {
console.log(dogNames1[i])
}


const toyStoryData = {
director : 'John Lassester',
releaseYear: 1995,
boxOfficeInGdp: 272886800,
starring: ['Tom Hanks', 'Tim Allen', 'Don Rickles'],
runtimeInMinutes: 81,
};

console.log(toyStoryData)

console.log(toyStoryData.director)

//store a variable and dynamically access a property

const searchTerm = 'starring'

console.log(toyStoryData[searchTerm]);

//access a nested property

//const stars = toyStoryData.starring;
//console.log(toyStoryData.starring[0]);

//mutate an object

//toyStoryData.director = 'kev';

//console.log(toyStoryData)

//iterate through an object
 //for (let key in toyStoryData) {
 //console.log(toyStoryData[key]);
 //}

//functions

//const name1 = "Kev";
//const name2 = "Doug";

//const greeting1 = "Hello " + name1 + "!";
//const greeting2 = "Hello " + name2 + "!";

//console.log(greeting1)
//console.log(greeting2)

//function createGreeting(name, greeting) {
//const greeting = "Hello " + name + "!";
//console.log(greeting)
//return greeting

//createGreeting(name1)
//createGreeting(name2)

//createGreeting(name1, name2) //will not work as javascript only executes one line of code at a time

//const greeting2 = createGreeting(name1)
//const greeting3 = createGreeting(name2)

//console.log(greeting1)

// Log to console
console.log('Hello console')

function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

function reusableFunction() {
  console.log("Hi, World");
}

reusableFunction();

//Passing values to functions with arguments
function ourFunctionWithArgs(a, b) {
  console.log(a+b);
}
ourFunctionWithArgs(10, 5);

function ourFunctionWithArgs2 (c, d) {
  console.log(c-d);
}
ourFunctionWithArgs2(100, 56);

//Global scope

var myGlobal = 10;

function fun1() {
  oopsGlobal = 5
}

function fun2() {
  var output = "";
  if(typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
   }
   console.log(output);
}
fun1();
fun2();


//Local scope
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
  }
  myLocalScope();
  
  //Global v local scope in functions
  //local takes precident over global
   var outerWear = "T-Shirt";
   
   function myOutfit() {
       var outerWear = "Sweater";
       
       return outerWear;
   }
   
   console.log(myOutfit());
   console.log(outerWear);
   
   //Return a value from a function with return
   function plus10(num) {
       return num + 10;
   }
   console.log(plus10(100));
   
   function minus10(num){
       return num - 10;
   }
   console.log(minus10(100));
   
   function times10(num){
       return num * 10;
   }
   console.log(times10(100));
   
   //undefined value returned
   /*var sum = 5
   function addFive() {
       sum = sum + 5;
   }
   console.log(addFive())*/
   
   //Assignment with return value
   var changed = 0;
   function change(num) {
       return (num + 5) /3;
   }
   
   changed = change(10);
   
   console.log(changed)
   
   var processed = 0;
   
   function processArg(num) {
       return (num+3) / 5
   }
   
   processed = processArg(7);
   
   console.log(processed)
   
   //stand in line
   function nextInLine(arr, item) {
       item = 6
       arr.push();
       return arr.shift();
   }
   
   var testArr = [1,2,3,4,5];
   
   console.log("Before: " + JSON.stringify(testArr));
   console.log(nextInLine(testArr, 6));
   console.log("After: " + JSON.stringify(testArr))
   
   //Boolean Values
   function welcomeToBooleans() {
       return false;
   }
   
   //Use Conditional Logic with if statements
   function ourTrueOrFalse(isItTrue) {
       if (isItTrue) {
           return "Yes, it is true";
       }
       return "No, it is false";
       }
       
  function trueOrFalse(wasThatTrue) {
      if(wasThatTrue) {
          return "Yes, that was true.";
      }
      return "No, that was false.";
  }
  
  console.log(trueOrFalse(true));
  
  //Comparison with the equality operator
  function testEqual(val) {
      if (val == 10) {
          return "Equal";
      }
      return "Not Equal";
  }
  console.log(testEqual(10));
  
  //Comparison with the Strict Equality Operator
  function testStrict(val) {
      if (val === 3) {
          return "Equal";
      }
      return "Not Equal";
  }
  
  console.log(testStrict(3));









































