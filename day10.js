// 94 ==>   Where is Bob!?!
//  Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

function findBob(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === "Bob") return i;
  //   }
  //   return -1
}

function findBob(arr) {
  return arr.indexOf("Bob");
}

// console.log(findBob(["Jimmy", "Layla", "Bob"]));
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));
// console.log(findBob(["Jimmy", "Layla", "James"]));

// 95 ==>   Negate the Array of Numbers
//  Given an array of numbers, negate all elements contained within.
//      Negating a positive value -+n will return -n, because all +'s are removed.
//      Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(arr) {
  let store = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      const value = `-${arr[i]}`;
      store.push(+value);
    } else {
      const removeMinuse = arr[i].toString().split("-").join("");
      store.push(+removeMinuse);
    }
  }
  //   return store;
}

function negate(arr) {
  return arr.map((element) => {
    if (element > 0) {
      const addMinuse = `-${element}`;
      return +addMinuse;
    } else {
      const ignoreMinuse = element.toString().split("-").join("");
      return +ignoreMinuse;
    }
  });
}

// console.log(negate([1, 2, 3, 4]));
// console.log(negate([-1, 2, -3, 4]));
// console.log(negate([]));

// 96 ==>   Convert Number to String of Dashes
//  Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(n) {
  let newstring = "";
  for (let i = 0; i < n; i++) {
    newstring += "-";
  }
  //   return newstring;
  return "-".repeat(n);
}

// console.log(Go(1));
// console.log(Go(5));
// console.log(Go(3));

// 97 ==>   Word Endings
//  Create a function that adds a string ending to each member in an array.

function addEnding(arr, addletter) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store.push(arr[i] + addletter);
  }
  //   return store
}

function addEnding(arr, addletter) {
  return arr.map((element) => element + addletter);
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
// console.log(addEnding(["new", "pander", "scoop"], "er"));
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));

// 98 ==>   Flip the Boolean
//  Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function reverse(boolvalue) {
  if (typeof boolvalue === "boolean") {
    return !boolvalue;
  } else {
    return "Boolean expected";
  }
}

// console.log(reverse(true));
// console.log(reverse(false));
// console.log(reverse(0));
// console.log(reverse(null));

// 99 ==>   Return the Four Letter Strings
//  Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr) {
  return arr.filter((element) => element.length === 4);
}

// console.log(isFourLetters(["Tomato", "Potato", "Pair"]));
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));

// 100 ==>  Shuffle the Name
//  Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

function nameShuffle(string) {
  return string.split(" ").reverse().join(" ");
}

// console.log(nameShuffle("Donald Trump"));
// console.log(nameShuffle("Rosie O'Donnell"));
// console.log(nameShuffle("Seymour Butts"));

// 101 ==>  Video Streaming Plans
//  Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
//      BasicPlan   StandardPlan    PremiumPlan
//      ✓           ✓               ✓               canStream
//      ✓           ✓               ✓               canDownload
//      ✓           ✓               ✓               hasSD
//                  ✓               ✓               hasHD
//                                  ✓               hasUHD
//      1           2               4               numOfDevices
//      $8.99       $12.99          $15.99          price
//      BasicPlan.hasSD
//      PremiumPlan.hasSD
//      BasicPlan.hasUHD
//      BasicPlan.price
//      PremiumPlan.numOfDevices

// 102 ==>  Missing Third Angle
//  You are given 2 out of 3 angles in a triangle, in degrees.
//  Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//      An acute angle is less than 90 degrees.
//      A right angle is exactly 90 degrees.
//      An obtuse angle is greater than 90 degrees (but less than 180 degrees).
//  For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.

function missingAngle(a, b) {
  const result = a + b;
  if (result < 90) {
    return "acute angle";
  } else if (result > 90 && result < 180) {
    return "obtuse angle";
  } else {
    return "rigth angle";
  }
}

// console.log(missingAngle(27, 59));
// console.log(missingAngle(135, 11));
// console.log(missingAngle(45, 45));

// 103 ==>  Semantic Versioning
//  In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//      The first number is the major version.
//      The second number is the minor version.
//      The third number is the patch (bug fixes).
//  Write three separate functions, one to retrieve each element in the semantic versioning specification.
//      // 6.1.9

function retrieveMajor(string) {
  return +string.split("").shift();
}

// console.log(retrieveMajor("6.1.9"));
// console.log(retrieveMajor("2.1.0"));
//      // 2.1.0

function retrieveMinor(string) {
  return +string.slice(2, 3);
}

// console.log(retrieveMinor("6.1.9"));
// console.log(retrieveMinor("2.1.0"));

function retrievePatch(string) {
  return +string.split("").pop();
}

// console.log(retrievePatch("6.1.9"));
// console.log(retrievePatch("2.1.0"));

// 104 ==>  Alphabet Soup
//  Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(string) {
  const BreakString = string.split("");

  const store = [];
  BreakString.forEach((element) => {
    const charCode = element.charCodeAt();
    store.push(charCode);
  });

  for (let i = 0; i < store.length; i++) {
    for (let j = i + 1; j < store.length; j++) {
      if (store[i] > store[j]) {
        let temp = store[i];
        store[i] = store[j];
        store[j] = temp;
      }
    }
  }
  let newstring = "";
  store.forEach((element) => {
    const charToString = String.fromCharCode(element);
    newstring += charToString;
  });
  return newstring;
}

// Second approch

function AlphabetSoup(string) {
  return string.split("").sort().join("");
}

// console.log(AlphabetSoup("hello"));
// console.log(AlphabetSoup("edabit"));
// console.log(AlphabetSoup("hacker"));
// console.log(AlphabetSoup("geek"));
// console.log(AlphabetSoup("javascript"));
