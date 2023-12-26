// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.

function hasSpaces(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") return true;
  }
  //   return false
  //   return string.includes(" ");
}

// console.log(hasSpaces("hello"));
// console.log(hasSpaces("hello, world"));
// console.log(hasSpaces(" "));
// console.log(hasSpaces(""));
// console.log(hasSpaces(",./!@#"));

// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//     getContainer("Bread") ➞ "bag"
//     getContainer("Beer") ➞ "bottle"
//     getContainer("Candy") ➞ "plastic"
//     getContainer("Cheese") ➞ null
// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
//     numberArgs("a", "b", "c") ➞ 3
//     numberArgs(10, 20, 30, 40, 50) ➞ 5
//     numberArgs(x, y) ➞ 2
//     numberArgs() ➞ 0

// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format:
//     "X has a population of Y and is situated in Z"
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(obj) {
  return `${obj.name} has a popultation ${obj.population} and is situated in ${obj.continent}`;
}

// console.log(
//   cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   })
// );
// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia",
//   })
// );
// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//   })
// );

// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(obj) {
  return obj.width * obj.length * obj.height;
}

// console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
// console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
// console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));
//     Volume is length * width * height.

// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(string) {
  const firstTwoLetter = string.slice(0, 2);
  return `${firstTwoLetter}... ${firstTwoLetter}... ${string}`;
}

// console.log(stutter("incredible"));
// console.log(stutter("enthusiastic"));
// console.log(stutter("outstanding"));

// 57 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(string) {
  const lastletter = string[string.length - 1];
  return lastletter !== "s" ? false : true;
}

// console.log(isPlural("change"));
// console.log(isPlural("changes"));
// console.log(isPlural("dudes"));
// console.log(isPlural("magic"));
//         This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
//
// 58 ==> Four Passengers and a Driver
// A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(number) {
  return Math.ceil(number / 5);
}

// console.log(carsNeeded(5));
// console.log(carsNeeded(11));
// console.log(carsNeeded(0));

// 59 ==> ES6: Destructuring Arrays IV
//     There is an easy way to assign to array values to the nth index by using the Rest element.
//         var [head, tail] = [1, 2, 3, 4]
//         console.log(head) // outputs  1
//         console.log(tail) // outputs 2
//     But how could I make tail = [2, 3, 4] instead of tail = 2?
// 60 ==> ES6: Destructuring Arrays III
//     You can assign variables from arrays with destructuring like this:
//         const arr = ["eyes", "nose", "lips", "ears"]
//         let [eyes, nose, lips, ears] = arr
//     But you can also skip over items in the array being destructured. (takeout only lips)
