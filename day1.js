function addition(a, b) {
  return a + +b;
}

// console.log(addition(3, 2));
// console.log(addition(-3, -6));
// console.log(addition(7, 3));
// console.log(addition("7", "3"));
// console.log(addition("7", 3));

function convert(number) {
  return 60 * number;
}

// console.log(convert(5));
// console.log(convert(3));
// console.log(convert(2));
// console.log(convert("2"));

function addition(number) {
  return 1 + +number;
}

// console.log(addition(0));
// console.log(addition("9"));
// console.log(addition("-3"));

function giveMeSomething(string) {
  return `Something ${string}`;
}

// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

function triArea(base, heigth) {
  return (base * heigth) / 2;
}

// console.log(triArea(3, 2));
// console.log(triArea(7, 4));
// console.log(triArea(10, 10));

function howManySeconds(number) {
  return number * 3600;
}

// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(24));

function getFirstValue(arr) {
  //   return arr[0];
  return arr.shift();
}

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

function nextEdge(a, b) {
  return a + b - 1;
}

// console.log(nextEdge(8, 10));
// console.log(nextEdge(5, 7));
// console.log(nextEdge(9, 2));

function findPerimeter(a, b) {
  return 2 * a + b * 2;
}

// console.log(findPerimeter(6, 7));
// console.log(findPerimeter(20, 10));
// console.log(findPerimeter(2, 9));

// `Return the Remainder from Two Numbers``There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`;

function remainder(a, b) {
  return a % b;
}

// console.log(remainder(1, 3));
// console.log(remainder(3, 4));
// console.log(remainder(-9, 45));
// console.log(remainder(5, 5));
