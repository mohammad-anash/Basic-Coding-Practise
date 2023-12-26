// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.

function isOdd(number) {
  return number % 2 !== 0;
}

// console.log(isOdd(-5))
// console.log(isOdd(25))
// console.log(isOdd(0))

// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.

function flipBaloon(boolvalue) {
  return boolvalue ? 0 : 1;
}

// console.log(flipBaloon(true));
// console.log(flipBaloon(false));
// console.log(flipBaloon(1));
// console.log(flipBaloon(0));

// 43 ==> Kinetic Energy
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2

function kineticEnergy(a, b) {
  return 0.5 * a * b ** 2;
}

// console.log(kineticEnergy(60, 3));
// console.log(kineticEnergy(45, 10));
// console.log(kineticEnergy(63.5, 7.35));

// 44 ==> Name Greeting!
//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".

const fun = (sentence) => `Greeting ${sentence}`;

// console.log(fun("Gerald"));
// console.log(fun("Tiffany"));
// console.log(fun("Ed"));

// Saleh Majeed, Wed 2:05 PM, Edited
// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.

function calculteExponent(base, heigth) {
  return base * heigth;
}

// console.log(calculteExponent(5, 5));
// console.log(calculteExponent(10, 10));
// console.log(calculteExponent(3, 3));

// 46 ==> Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

function newWord(string) {
  let newstring = "";
  for (let i = 1; i < string.length; i++) {
    newstring += string[i];
  }
  //   return newstring
  return string.slice(1);
}

// console.log(newWord("apple"));
// console.log(newWord("cherry"));
// console.log(newWord("plum"));

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.

function concat(arr, arr2) {
  return arr.concat(arr2);
}

// console.log(concat([1, 3, 5], [2, 6, 8]));
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));
// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
  //   return -1;
  return arr.indexOf(num);
}

// console.log(search([1, 5, 3], 5));
// console.log(search([9, 8, 3], 3));
// console.log(search([1, 2, 3], 4));
// console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"));

// 49 ==> Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.

function howManyStickers(number) {
  return number * 6;
}

// console.log(howManyStickers(1));
// console.log(howManyStickers(2));
// console.log(howManyStickers(3));

// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.

function check(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) return true;
  }
  //   return false
  return arr.includes(number);
}

// console.log(check([1, 2, 3, 4, 5], 3));
// console.log(check([1, 1, 2, 1, 1], 3));
// console.log(check([5, 5, 5, 6], 5));
// console.log(check([], 5));
