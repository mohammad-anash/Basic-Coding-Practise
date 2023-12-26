// 61 ==> ES6: Destructuring Objects III
//         const obj =  { two : 2 }
//         var { one, two } = obj
//         console.log(one) // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).
// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, f no argument is passed, return "Today, I am feeling neutral".

function moodToday(mood) {
  if (mood === "happy") {
    return "Today, I am feeling Happy";
  } else if (mood === "sad") {
    return "Today, I am feeling sad";
  } else {
    return "Today, I am feeling neutral";
  }
}

// console.log(moodToday("happy"));
// console.log(moodToday("sad"));
// console.log(moodToday(""));

// 63) ==> Similar Bread
//     Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//     The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

function hasSameBread(arr, arr1) {
  const arrLelement = arr.pop();
  const arrFelement = arr.shift();

  const arr1Lelement = arr1.pop();
  const arr1Felement = arr1.shift();
  return arrFelement === arrLelement && arr1Felement === arr1Lelement;
}
// console.log(
//   hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
//   )
// );
// console.log(
//   hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
//   )
// );
// console.log(
//   hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"])
// );
// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

function nSidedShape(num) {
  const shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  const store = [];
  for (const keys in shapes) {
    if (keys == num) {
      return shapes[keys];
    }
  }
  return store;
}

// console.log(nSidedShape(3));
// console.log(nSidedShape(1));
// console.log(nSidedShape(9));

//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!

// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store.push(arr[i] * 2);
  }
  return store;
  //   return arr.map((element) => element * 2);
}

// console.log(getMultipliedArr([2, 5, 3]));
// console.log(getMultipliedArr([1, 86, -5]));
// console.log(getMultipliedArr([5, 382, 0]));

// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

function longBurp(num) {
  let newstring = "";
  for (let i = 0; i < num; i++) {
    const value = "r";
    newstring += value;
  }
  //   return `Bu${newstring}p`
  const repeatR = "r".repeat(num);
  return `Bu${repeatR}p`;
}

// console.log(longBurp(3));
// console.log(longBurp(5));
// console.log(longBurp(9));

// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//         let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//         rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true

// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.

function ctoa(letter) {
  return letter.charCodeAt();
}

// console.log(ctoa("A"));
// console.log(ctoa("m"));
// console.log(ctoa("["));
// console.log(ctoa("/"));

// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
// console.log(totalCups(6));
// console.log(totalCups(12));
// console.log(totalCups(213));

// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(arr) {
  return arr.map((element) => element.length);
}

// console.log(wordLengths(["hello", "world"]));
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));

// 71 ==> Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(string) {
  const Index = string.lastIndexOf("/");
  return string.slice(Index + 1)
}

// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
// console.log(getFilename("ffprobe.exe"));