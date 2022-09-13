console.log("Hello world");

let greeting = "Hello " + "Danish";
console.log(greeting);

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




