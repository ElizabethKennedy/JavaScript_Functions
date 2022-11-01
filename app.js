console.log("Hello Functions Woot!");


function printOdds(n) {
  console.log("Start of printOdds");
  let sign = 1;

  if (n < 0) {
    sign = -1;
  }

  for (let num = 1; num <= n * sign; num++) {
    if (num % 2 == 1) {
      console.log(num * sign);
    }
  }

  console.log("End of printOdds");
}

printOdds(10);
printOdds(20);
printOdds(-30);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = "age", name = "Guest") {
    if (age < 0) {
        return null;
    }

    let ofAgeMsg = `Congrats $(name), you are old enough to drive`;
    let underAgeMsg = `Sorry $(name), you are not old enough to drive`;

    if (age >= 16) {
        console.log(ofAgeMsg);
    } else {
        console.log(underAgeMsg);
    }
}

let name = prompt ("What's your name?");
let age = parseInt (prompt("What's your age?"));


function checkAge(age = -1, name = "Guest") {
  if (age < 0) {
    return null;
  }

  let ofAgeMsg = `Congrats ${name}, you are old enough to drive`;
  let underAgeMsg = `Sorry ${name}, you'll have to wait ${
    16 - age
  } year(s) to drive`;

  if (age >= 16) {
    console.log(ofAgeMsg);
  } else {
    console.log(underAgeMsg);
  }
}

// let name = prompt("What's your name?");
// let age = parseInt(prompt("What's your age?"));

// if (!isNaN(age)) {
//   checkAge(age, name);
// }

checkAge(17); // yes
checkAge(); // nothing
checkAge(15, "Walter White, Jr."); // no
//end of driving age exercise
// Which quadrant?

const determinePosition = (x, y) => {
  switch (true) {
    case x > 0 && y > 0:
      // Quadrant 1
      return "Q1";
    case x < 0 && y > 0:
      // Quadrant 2
      return "Q2";
    case x < 0 && y < 0:
      // Quadrant 3
      return "Q3";
    case x > 0 && y < 0:
      // Quadrant 4
      return "Q4";
    case x == 0 && y != 0:
      // x axis
      return "x axis";
    case x != 0 && y == 0:
      // y axis
      return "y axis";
    default:
      return "origin";
  }
};

let position = determinePosition(0, 0);
console.log(position); 

const isValidTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
  let isValid = isValidTriangle(a, b, c); 

  if (isValid) {
    if (a == b && b == c) {
      
      return `Equilateral`;
    } else if (a == b || b == c || a == c) {
      
      return `Isosceles`;
    } else {
      return `Scalene`;
    }
  } else {
    return `Not a valid triangle`;
  }
};

console.log(determineTriangle(1, 1, 2)); // Invalid
console.log(determineTriangle(2, 2, 1)); // Isosceles
console.log(determineTriangle(3, 3, 3)); // Equilateral
console.log(determineTriangle(3, 4, 5)); // Scalene