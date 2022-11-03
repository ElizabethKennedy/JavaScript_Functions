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
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age = "age", name = "Guest") {
    if (age < 0) {
        return null;
    }

    let aboveSixteenMsg = `Congrats $(name), you are old enough to drive`;
    let belowSixteenMsg = `Sorry $(name), you are not old enough to drive`;

    if (age >= 16) {
        console.log(aboveSixteenMsg);
    } else {
        console.log(belowSixteenMsg);
    }
}

let name = prompt ("What's your name?");
let age = parseInt (prompt("What's your age?"));


function checkAge(age = -1, name = "Guest") {
  if (age < 0) {
    return null;
  }

  let aboveSixteenMsg = `Congrats ${name}, you are old enough to drive`;
  let belowSixteenMsg = `Sorry ${name}, you'll have to wait ${
    16 - age
  } year(s) to drive`;

  if (age >= 16) {
    console.log(aboveSixteenMsg);
  } else {
    console.log(belowSixteenMsg);
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
function quadrant (x,y){
    
  switch (true){
      case x == 0 && y == 0:
          console.log("Point is at origin.");
          break;
      case x == 0 && typeof y == "number":
          console.log("Point is on the y axis");
          break;
      case y == 0 && typeof x == "number":
          console.log("Point is on the x axis");
          break;
      case x > 0 && y > 0:
          console.log("Quadrant 1");
          break;
      case x < 0 && y > 0:
          console.log("Quadrant 2");
          break;
      case x > 0 && y < 0:
          console.log("Quadrant 3");
          break;
      case x < 0 && y < 0:
          console.log("Quadrant 4");
          break;
      default:
          console.log("Invalid input.")
      }
  }
  quadrant(-1,4);
  quadrant(1,5);
  quadrant(-1,-3);
  quadrant(1,-4);
  quadrant(0,5);
  quadrant(5,0);
  quadrant(6,"chocolate");


  console.log("EXERCISE 4:\n==========\n");
  // Exercise 4 Section
  function triangleType (x,y,z){
      if ((x + y) <= z || (x + z) <= y || (y + z) <= x){
          return console.log("Invalid triangle");
       }
      if (x == y  && y == z) {
         return console.log("Equilateral triangle");
      }
      if (x != y && y != z && z != x) {
         return console.log("Scalene triangle");
      }
      if ( x == y && x != z || y == z && x != y || x == z && y != z){
         return console.log("Isosceles triangle");
      }
  }
  triangleType(3,3,3);
  triangleType(1,1,2);
  triangleType(3,4,6);
  triangleType(1,2,2);



console.log("EXERCISE 5:\n==========\n");


const getNumberToFixed = (num, decimalPlace) => {
    return parseFloat(num.toFixed(decimalPlace));
  };

  const getAvg = (total, length) => {
    return getNumberToFixed(total / length);
  };

  const getUsageFeedback = (planLimit, days, usage) => {
    const cycleLength = 30;
    const projectedAvg = getAvg(planLimit, cycleLength);
    const currentAvg = getAvg(usage, days);
    const projectedUsage = currentAvg * cycleLength;
    const adjustedAvg = getAvg(planLimit - usage, cycleLength - days);

    let output = `${days} days used, ${cycleLength - days} days remaining
    Suggested daily use: ${projectedAvg} GB/day
    `;

    if (currentAvg > projectedAvg) {
      output += `You are using data in excess of your plan allowance by (${currentAvg} GB/day).
      If you continue this high rate of usage, you will exceed your data plan by
      ${projectedUsage - planLimit} GB.
      To stay below your data plan allowance, use no more than ${adjustedAvg} GB/day.`;
    } else if (currentAvg < projectedAvg) {
      output += `You are below your average daily use (${currentAvg} GB/day). If you continue at this rate of usage,
      you will lose out on ${Math.abs(
        projectedUsage - planLimit)} GB.
      To use all of the data available on your plan, use on average of ${adjustedAvg} GB/day.`;
    } else {
      output += `You have reached your average daily use (${currentAvg} GB/day).`;
    }

    console.log(output);
  };

  getUsageFeedback(100, 15, 56);