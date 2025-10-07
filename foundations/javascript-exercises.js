// 01_helloWorld
const helloWorld = function() {
  return 'Hello, World!'
};

// 02_addNumbers
function addNumbers() {
  const a = 1, b = 1;
  return a + b;
}

// 03_numberChecker
function numberChecker(number) {
  return number >= 10 ? true : false;
}

// 04_mathEquations
const a = 1 - 1;
const b = 1 + 8;
const c = 22 * 3;
const d = 5 % 4;
const e = b - 17;
const f = a + b + c + d + e;

// 05_joinStrings
const firstName = 'Carlos';
const lastName = 'Stevenson';
const fullName = `${firstName} ${lastName}`;

const thisYear = 1965;
const birthYear = 1947;
const age = thisYear - birthYear;

const greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;
