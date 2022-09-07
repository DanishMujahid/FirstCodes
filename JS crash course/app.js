console.log('Hello world, ' + 'I am Danish')
console.log('Javascript is amazing')
console.log('100')
console.log('Danish'[0] + 'Mujahid' [0])
console.log('12345'.length)

let str = "Danish"
console.log(str[str.length- 1])

// console log the numbers 1-3
/**
 * 1
 * 2
 * 3
 */
console.log('123')

const fullName = "Danish Mujahid"
let isRaining = true
let temperature = 30
let planet = 'Earth'

temperature = temperature + 2

console.log(temperature)

let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;

console.log(fahrenheit)

let bool = '1' === 1
console.log(bool)

console.log("This is my first javascript script")
let mystr = "Danish"
let ourgreeting ="Hello, "
console.log(ourgreeting + mystr)

let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log("Show the video")
}
else if (loggedIn === true) {
    console.log("Tell user to upgrade their subscription")
}
else { 
    console.log("Tell user to log into account")

}
let cash = 50
let price = 40
let difference = cash - price


if (cash > price) {
        console.log("Here is your item and your " + difference + " pounds change.")
}
else if(cash === price){
    console.log("Here is your item, there is no change have a nice day!")
}
else {
    console.log("Not enough money, you still owe " +difference *-1+ " pounds.")
}

let cash1 = 40
let price1 = 40
let isStoreOpen = false

if (cash1 >= price1 && !isStoreOpen) {
    console.log("Print the receipt")
}
let cash2 = 40
let price2 = 40
let ifStoreOpen = false

if (0) {
    console.log("Print the receipt again, !!val")
}
else {
    console.log("falsy value ")
}
let isObese = false

isObese? console.log("Unhealthy") : console.log("Healthy")

let hot = "0"

hot? console.log("Weather is hot outside") : console.log("Weather is cold outside")

let subscribed1 = false
let loggedIn1 = true

let str1 = subscribed1 && loggedIn1? "Show the video" : "Hide the video"
console.log(str1);

let cash3 = 50
let price3 = 40
let isStoreOpen1 = false

let str3 = cash3 >= price3 && isStoreOpen1? "Print the receipt" : "Do not print the receipt"
console.log(str3);

// DRY = Do not repeat yourself
// let count in = 1;

//while (count <=100) {
    //console.log(count)
    //count = count +1;
    //}

// for (let i = 0; i <100; i++) {
    //console.log(i + 1);
    //}
for (let i= 1; i<= 20; ++i)
  if(i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} -> Frontend Simplified`)
}
else if(i % 3 === 0) {
    console.log(`${i} -> Frontend`)
}
else if(i % 5 === 0) {
    console.log(`${i} -> Simplified`)
}
else {
    console.log(`${i} -> ${i}`)
}

const str9 = "Frontend Simplified"
for(let o= 0; o< str9.length; ++o) {
    console.log(str9[o])
}

// function definition
function welcomePersonToScript(name){
    console.log(`Welcome to my Script, ${name}`)
}

//call the function
welcomePersonToScript('Danish');
welcomePersonToScript('Sadia');
welcomePersonToScript('George Clooney');

function welcomeToMyWorld(firstName, lastName) {
    console.log(`Welcome to my world, ${firstName} ${lastName}`)
}

welcomeToMyWorld('Danish','Mujahid');
welcomeToMyWorld('Sadia','Mujahid');
welcomeToMyWorld('Martin','Cloon');

function fn() {
    return 5
    console.log('my function')
}

console.log(5);

function sumOfTwoNumbers(){
    return 5+ 10
}

console.log(sumOfTwoNumbers(5 ,10));

function minusOfTwoNumbers(){
    return 100-25
}

console.log(minusOfTwoNumbers());

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(25, 25));

function celsiusToFahrenheit(num1, num2, num3){
    return num1 * 1.8 + 32;

}
    console.log(celsiusToFahrenheit(0))

//function convertCelsiusToFahrenheit(celsius) {
    //let fahrenheit = celsius * 1.8 + 32
    //return fahrenheit
//}

//console.log(convertCelsiusToFahrenheit(0))
//console.log(convertCelsiusToFahrenheit(10))
//console.log(convertCelsiusToFahrenheit(30))

const convertCelsiusToFahrenheit = (celsius) => {
    return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(0))
console.log(convertCelsiusToFahrenheit(10))
console.log(convertCelsiusToFahrenheit(30))

//Arrays, can store all 5 items in one variable
//let item1 = 20
//let item2 = 30
//let item3 = 40
//let item4 = 50
//let item5 = 60

//let arr = [20, 30, 40, 50, 100]

//First element of array:
//console.log(arr[0])

//Last element of array:
//console.log(arr[4])

//Best practice
//console.log(arr[arr.length-1])

//Add element onto end of array
//arr.push(200)

//console.log(arr);

// [20, 30, 40, 50, 100]
//let newArr = arr.filter((element) => {
    //console.log(element)
    //if (element < 50) {
    //return true;
    //}
//})

//console.log(newArr)

//let newArr = arr.filter(element => {
    //return element < 50
//}) 
//It returns a boolean (true and prints elements less than 50)

//console.log(newArr)

//BEST PRACTICE
//let newArr = arr.filter(element => element <50)
//console.log(newArr)
//element => (will return only if one line of code i.e element true or false as less than 50)

let goodGrades = ['A+', 'A', 'FAIL']

for (let i = 0; i< goodGrades.length; ++i){

//let goodGrades = grades.filter(element => element !== 'FAIL')

console.log (goodGrades[i]);
}

let grades1 = ['FAIL', 'FAIL', 'B']

let averageGrades = grades1.filter(element => element !== 'FAIL');

console.log(averageGrades);

let grades2 = ['FAIL']

let badGrades = grades2.filter(element => element !== 'FAIL');

console.log(grades2)

let grades5 = ['A+', 'A', 'FAIL']

let goodGrades2 = []

for (let i = 0; i< grades5.length; ++i) {
    if (grades5[i] !== 'FAIL') {
        goodGrades2.push(grades5)

    }

    console.log (goodGrades2);
}

//let arr = [1, 4, 9, 16]

//let newArray = arr.map((elem) => {
    //console.log(elem)
    //return undefined;
//})

//console.log(newArray)

//bestPractice
//let newArray = arr.map((elem) => 'dog')
//console.log(newArray)

let arr1 = [1, 5, 10, 3]
//let newArray1 = arr1.map((element1) => (element1 *100))
//console.log(newArray1)

let newArray1= arr1.map(element1 => element1 *100)
console.log(newArray1)

let arr2 = [0, 10, 20]
let newArray2 = arr2.map((element2) => (element2*100))
console.log(newArray2)

//map array without map
let dollars = [1, 5, 10, 3];
let cents = [];

for (let i = 0; i <dollars.length; ++i) {
    cents.push(dollars[i] *100);

    console.log(cents)
}

//Objects
//let userFirstName = 'Danish'
//let userLastName = 'Mujahid'
//let userDiscordId = 'DanishMujahid'
//let userEmailAddress ='danishmujahid@outlook.com'
//Very repetitive and far too long

let users = [
{
    username: 'Danish',
    email: 'danishmujahid@outlook.com',
    password: 'DanishMuj',
    discordId: 'DanishMujahid',
    lessonsCompleted: [0, 1],
},
{
    username: 'david',
    email: 'david@outlook.com',
    password: 'DavidMuj',
    discordId: 'DavidMujahid',
    lessonsCompleted: [0, 1, 2, 3],
},
];

function login(email, password) {
    for (let i = 0; i< users.length; ++i ) {
    if (users[i].email === email){
    console.log(users[i]);
        if (users[i]. password === password){
            console.log('log user in - the details are correct');
        }
        else {
                console.log('Password is incorrect - try again') 
            }
            return; 
        }
        
        console.log('could not find an email that matches')
    }
    }

//login('danishmujahid@outlook.com', 'DanishMuj');
//console.log (users[0]. lessonsCompleted.map(element => element*2));
//console.log(user.username);
//console.log(user.discordId)
//console.log(user.lessonsCompleted.map((element) => element *2));

function register(
    name,
    email,
    password,
    subscriptionStatus,
    discordId,
    lessonsCompleted
){
    console.log(name)
    let user = {
        username: name,
        email : email,
        password: password,
        subscriptionStatus: subscriptionStatus,
        discordID: discordId,
        lessonsCompleted: lessonsCompleted
    }
    users.push(user)
}
register (
'Danish',
'danish@hotmail.com', 
'Danish123', 
'VIP', 
'Dan001', 
'0, 1'
);

console.log(users)

//setup
let processed = 0;

function processedArg (num) {
    return (num + 8)/2; 
}

processed = processedArg(24)
console.log(processed)

//first way of accessing an element 


//second way of accessing an element

