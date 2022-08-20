console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function printOdds(n) {
    console.log(count = n)    
    for(let i = 0; i <= count; i++) {
        if (!(i % 2 == 0)) {
            console.log(i)

        }
    }
}

printOdds(10);
printOdds(20);
printOdds(30);

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



checkAge(17); // yes
checkAge(); // nothing
checkAge(15, "Cameron"); // no

const determinePosition = (x, y) => {

    if  (x > 0 && y > 0) {
        return "Q1";
      }
      else if (x < 0 && y > 0) {
        return "Q2";
      }
      else if (x < 0 && y < 0) {
        return "Q3";
      }
      else if (x > 0 && y < 0) {
        return "Q4";
      }
      else if (x == 0 && y != 0) {
        return "x axis";
      }
      else if (x != 0 && y == 0) {
        return "y axis"
      };

}

let position = determinePosition (0,0);
console.log(position);

//Exercise 4 

const isValidTriangle = (a, b, c ) => {
    return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
    letIsValid = isValidTriangle(a, b, c);

    if (isValid){
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

console.log(determineTriangle (1,1,2));
console.log(determineTriangle(2,2,1));
console.log(determineTriangle(3,3,3));
console.log(determineTriangle(3,4,5));