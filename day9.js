// 83 ==>   Sum of the Odd Numbers
//  Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
//      // 1 + 3 + 5 = 9

function addOddToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  //   return sum;
}

function addOddToN(n) {
  return Array.from({ length: n + 1 }).reduce((prev, current, index) => {
    if (index % 2 != 0) {
      prev += index;
    }
    return prev;
  }, 0);
}

// console.log(addOddToN(5));
// console.log(addOddToN(13));
// console.log(addOddToN(47));

// 84 ==>   Halloween Day
//  Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".

function halloween(string) {
  const month = +string.slice(5, 7);
  const Date = +string.slice(8, 10);

  return month === 10 && Date === 31 ? "Bonfire toffee" : "toffe";
}

// console.log(halloween("2013/10/31"));
// console.log(halloween("2012/07/31"));
// console.log(halloween("2011/10/12"));

// 85 ==>   Simple OOP Calculator
//  Create functions for the Calculator class that can do the following:

class Calculator {
  add(a, b) {
    console.log(a + b);
  }
  subtract(a, b) {
    console.log(a - b);
  }
  multiply(a, b) {
    console.log(a * b);
  }
  divide(a, b) {
    console.log(a / b);
  }
}

// var calculator = new Calculator();
// console.log(calculator.add(10, 5));
// console.log(calculator.subtract(10, 5));
// console.log(calculator.multiply(10, 5));
// console.log(calculator.divide(10, 5));

// 86 ==>   Limit a Number's Value
//  Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
//      If the number falls within the range, the number should be returned.
//      If the number is less than the lower limit of the range, the lower limit should be returned.
//      If the number is greater than the upper limit of the range, the upper limit should be returned.

function limitNumber(a, b, c) {}

// console.log(limitNumber(5, 1, 10)); //   5
// console.log(limitNumber(-3, 1, 10)); //   1
// console.log(limitNumber(14, 1, 10)); //   10
// console.log(limitNumber(4.6, 1, 10)); //   4.6

// 87 ==>   Skip the Drinks with Too Much Sugar
//  The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
//  Drinks that contain too much sugar (in this challenge) are:
//      Cola
//      Fanta

function skipTooMuchSugarDrinks(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "cola" && arr[i] != "fanta") {
      store.push(arr[i]);
    }
  }
  //   return store
  return arr.filter((element) => element != "cola" && element != "fanta");
}

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

// 88 ==>   Add a Consecutive List of Numbers
//  Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.

function addUpTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(addUpTo(3));
// // 1 + 2 + 3 = 6
// console.log(addUpTo(10));
// // 1 + 2 + 3 + ... + 10 = 55
// console.log(addUpTo(7));
// // 1 + 2 + 3 + ... + 7 = 28

// 89 ==>   Check if String Ending Matches Second String
//  Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str1, str2) {
  const getstring = str1.slice(-str2.length);
  return getstring.includes(str2);
}

// console.log(checkEnding("abc", "bc"));
// console.log(checkEnding("abc", "d"));
// console.log(checkEnding("samurai", "zi"));
// console.log(checkEnding("feminine", "nine"));
// console.log(checkEnding("convention", "tio"));

// 90 ==> Find the Bug: Checking Even Numbers
//  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
//  Not a big deal, your friend says. He writes the following code:
//      function checkAllEven(arr) {
//          return arr.every(x % 2 === 0)
//      }
//  The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

function checkAllEven(arr) {
  return arr.every((element) => element % 2 == 0);
}

// console.log(checkAllEven([1, 2, 3, 4]));
// console.log(checkAllEven([2, 4, 6]));
// console.log(checkAllEven([5, 6, 8, 10]));
// console.log(checkAllEven([-2, 2, -2, 2]));

// 91 ==>   Remove Null from an Array
//  Create a function to remove all null values from an array.

function removeNull(arr) {
  const clutter = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != null) clutter.push(arr[i]);
  }
  //   return clutter
}

function removeNull(arr) {
  return arr.filter((element) => element != null);
}

// console.log(removeNull(["a", null, "b", null]));
// console.log(removeNull([null, null, null, null, null]));
// console.log(removeNull([7, 8, null, 9]));

// 92 ==>   True Ones, False Zeros
//  Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(word) {
  let store = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "1") {
      store.push(true);
    } else {
      store.push(false);
    }
  }
  //   return store
}

function integerBoolean(string) {
  return string.split("").map((element) => (element === "1" ? true : false));
}

// console.log(integerBoolean("100101"));
// console.log(integerBoolean("10"));
// console.log(integerBoolean("001"));

// 93 ==>   Modifying the Last Character
//  Create a function which makes the last character of a string repeat n number of times.

function modifyLast(string, n) {
  const lastletter = string.indexOf(string.split("").pop());
  const ignoreLastletter = string.slice(0, lastletter);

  let newstring = "";
  for (let i = 0; i < n; i++) {
    const value = string[string.length - 1];
    newstring += value;
  }
  //   return `${ignoreLastletter}${newstring}`;
}

function modifyLast(string, n) {
  const lastletter = string.slice(0, string.indexOf(string[string.length - 1]));
  const repeatLastletter = string[string.length - 1].repeat(n);
  
  return `${lastletter}${repeatLastletter}`
}

// console.log(modifyLast("Hello", 3));
// console.log(modifyLast("hey", 6));
// console.log(modifyLast("excuse me what?", 5));
