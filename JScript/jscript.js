let day;
switch (newDate().getDay()) {
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
    day= "Thursday";
}
 console.log(day
    )

    let count = 0;

    //Card Counting
function cc(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  count += 1
  break;
  case 7:
  case 8:
  case 9:
  count += 0
  break;
  case 10:
  case 'J':
  case 'Q':
  case 'K':
  case 'A':
  count -= 1;
  break;
}

let action = ""

if (count > 0) {
  action = "Bet"
} else {
  action = "Hold";
}

  return `${count} ${action}`;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist" : "Danish",
    "title" : "Bad",
    "release_year" : 1999,
    "formats" : [
      "CD",
      "Digital"
    ]

  }
];

function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";

}

checkEqual(1, 2);

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
  return [startNum]; 
  } else {
  var numbers = rangeOfNumbers(startNum, endNum-1);
  numbers.push(endNum)
  return numbers
  return [];
  }
}

console.log(rangeOfNumbers(1, 5));