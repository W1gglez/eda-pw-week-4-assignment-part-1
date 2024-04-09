console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Logan'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}

console.log(addNumbers(5, 6));
console.log(addNumbers(15, 6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

console.log(multiplyThree(2, 2, 3));
console.log(multiplyThree(2.34, 123, 65));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log(isPositive(8));
console.log(isPositive(-5));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return 'undefined';
  }
}

console.log(getLast([1, 2, 3, 4, 5]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  let result = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      result = true;
    }
  }
  return result;
}

console.log(find(3, [1, 5, 3, 2]));
console.log(find(4, [1, 5, 3, 2]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let result = false;
  if (string.trim().toLowerCase().charAt(0) === letter) {
    result = true;
  }
  return result;
}

console.log(isFirstLetter('h', 'Hello World!'));
console.log(isFirstLetter('g', '    Good Morning!   '));
console.log(isFirstLetter('z', 'xylophone'));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}

console.log(sumAll([1, 2, 3]));
console.log(sumAll([50, 150, 300]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  let newArray = [];
  for (item of array) {
    if (item > 0) {
      newArray.push(item);
    }
  }
  return newArray;
}

console.log(allPositive([4, -3, 0, 5.2, -6.8, 198273468]));
console.log(allPositive([0, -3, -4, -5.2]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

//Edabit Challange: Function Factory - Medium
//Create a function that takes a "base number" as an argument. This function should return another function which takes a new argument, and returns the sum of the "base number" and the new argument.

function makePlusFunction(num) {
  return function (x) {
    return x + num;
  };
}

const plusSix = makePlusFunction(6);

console.log(plusSix(10));
console.log(plusSix(4));
console.log(plusSix(75));

const plusNine = makePlusFunction(9);

console.log(plusNine(10));
console.log(plusNine(4));
console.log(plusNine(75));
console.log(plusNine(plusSix(10)));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
