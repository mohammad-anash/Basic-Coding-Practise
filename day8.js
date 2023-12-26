// 72 ==> Nth Star Number
//  Create a function that takes a positive integer and returns the nth "star number".
//  A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.

function starNumber(n) {
  return 6 * n * (n - 1) + 1;
}

// console.log(starNumber(2));
// console.log(starNumber(3));
// console.log(starNumber(5));

// 73 ==> Lowercase, Uppercase or Mixed?
//  Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(string) {
  //   for (let i = 0; i < string.length; i++) {
  //     if (string[i] === string[i].toUpperCase()) {
  //       return "Upper";
  //     } else if (string[i] === string[i].toLowerCase()) {
  //       return "Lower";
  //     } else {
  //       return "Mixed";
  //     }
  //   }

  const inUpper = string
    .split("")
    .every((element) => element === element.toUpperCase());
  const inlower = string
    .split("")
    .every((element) => element === element.toLowerCase());

  if (inUpper) {
    return "uppper";
  } else if (inlower) {
    return "Lower";
  } else {
    return "mixed";
  }
}

// console.log(getCase("whisper..."));
// console.log(getCase("SHOUT!"));
// console.log(getCase("Indoor Voice"));

// 74 ==> ES6: Destructuring Arrays
//  You can assign variables from nested arrays like this:
//    const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
//    let trans1 = arr[0]
//    let trans2 = arr[1]
//    let trans3 = arr[2][0]
//    let trans4 = arr[2][1][0]
//    console.log(trans1) // outputs "cars"
//    console.log(trans2) // outputs "planes"
//    console.log(trans3) // outputs "trains"
//    console.log(trans4) // outputs "motorcycles"
//  With ES6, you can assign variables from arrays in a much more succint way. Use Array Destructuring to assign variables

// 75 ==> The 3 Programmers Problem
//  You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers() {
  let MaxValue = arguments[0];
  let MinValue = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (MaxValue < arguments[i]) {
      MaxValue = arguments[i];
    }
    if (MinValue > arguments[i]) {
      MinValue = arguments[i];
    }
  }
  const diffrence = MaxValue - MinValue;
  //   return diffrence;
}

// Second approch
function programmers() {
  const Diffrence = Math.max(...arguments) - Math.min(...arguments);
  return Diffrence;
}

// console.log(programmers(147, 33, 526));
// console.log(programmers(33, 72, 74));
// console.log(programmers(1, 5, 9));

// 76 ==> Get the Sum of All Array Elements
//  Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
  let sum = 0;
  for (const nums of arr) {
    sum += nums;
  }
  return sum;
}

// console.log(getSumOfItems([2, 7, 4]));
// console.log(getSumOfItems([45, 3, 0]));
// console.log(getSumOfItems([-2, 84, 23]));

// 77 ==> Spaces Between Each Character
//  Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(string) {
  let newstring = "";

  for (let i = 0; i < string.length; i++) {
    newstring += `${string[i]} `;
  }
  //   return newstring;
  //   return string.split("").join(" ");
}

// console.log(spaceMeOut("space"));
// console.log(spaceMeOut("far out"));
// console.log(spaceMeOut("elongated musk"));

//   78 ==> Raucous Applause
//  After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(string) {
  let Clcount = 0;
  let newstring = "";
  for (let i = 0; i < string.length; i++) {
    const value = string.slice(i, i + 2);
    if ("Cl".includes(value)) {
      Clcount++;
    }
  }
  //   return Clcount;
}

function countClaps(string) {
  return string.split("").reduce((clCount, _, index) => {
    const value = string.slice(index, index + 2);
    if ("Cl".includes(value)) clCount++;
    return clCount;
  }, 0);
}

// console.log(countClaps("ClaClaClaClap!"));
// console.log(countClaps("ClClClaClaClaClap!"));
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));

// 79 ==> Filter Strings from Array
//  Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      store.push(arr[i]);
    }
  }
  //   return store
  return arr.filter((element) => typeof element == "number");
}

// console.log(filterArray([1, 2, 3, "a", "b", 4]));
// console.log(filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]));
// console.log(filterArray(["Nothing", "here"]));

//   80 ==> Summing the Squares
//   Create a function where given the number n, return the sum of all square numbers up to and including n.

function squaresSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    const value = i ** 2;
    sum += value;
  }
  // return sum
}

function squaresSum(n) {
  return Array.from({ length: n + 1 }).reduce((sum, current, index) => {
    const findSquare = index ** 2;
    sum += findSquare;
    return sum;
  }, 0);
}

// console.log(squaresSum(3));
// console.log(squaresSum(12));
// console.log(squaresSum(13));

//   81 ==> Check if Number is within a Given Range
//  Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(n, obj) {
  return n >= obj.min && n <= obj.max;
}

// console.log(isInRange(4, { min: 0, max: 5 }));
// console.log(isInRange(4, { min: 4, max: 5 }));
// console.log(isInRange(4, { min: 6, max: 10 }));
// console.log(isInRange(5, { min: 5, max: 5 }));
//  Numbers can be positive or negative, and they may not be integers.
//  You can assume min <= max is always true.

// 82 ==> Coding Website Score Calculator
//  Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

function scoreCalculator(Easy, Medium, Hard) {
  if (Easy < 0 || Medium < 0 || Hard < 0) {
    return "Invalid";
  }
  return Easy * 5 + Medium * 10 + Hard * 20;
}

// console.log(scoreCalculator(1, 2, 3));
// console.log(scoreCalculator(1, 0, 10));
// console.log(scoreCalculator(5, 2, -6));
