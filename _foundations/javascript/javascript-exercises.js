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

// 06_repeatString
const repeatString = (a, b) => {
  if (b < 0) return 'ERROR';

  let string = '';
  for (let i = 0; i < b; i++) string += a;
  return string;
};

// 07_reverseString
const reverseString = (s) => {
  let string = '';
  for (let i = s.length - 1; i >= 0; i--) string += s[i];
  return string;
};

// 08_removeFromArray
const removeFromArray = (a, ...b) => {
  let data = [...a];
  for (let i = 0; i < b.length; i++) {
    data = data.filter(value => value !== b[i]);
  }
   
  return data;
};

// 09_sumAll
const sumAll = (a, b) => {
  // stupify (brain cells left me)
  if (a < 0) return 'ERROR';
  if (a !== Math.floor(a)) return 'ERROR';
  if (typeof b === 'string') return 'ERROR';
  if (Array.isArray(b)) return 'ERROR';

  let sum = 0;
  if (a > b) {
    for (let i = b - 1; i < a; i++) {
      sum += i + 1;
    }

    return sum;
  }

  for (let i = a - 1; i < b; i++) {
    sum += i + 1;
  }

  return sum;
};

// 10_leapYears
const leapYears = (n) => {
  return (n % 4 === 0 && n % 100 !== 0) || (n % 400 === 0);
};

// 11_tempConversion
const convertToCelsius = (n) => {
  return Number(((n - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = (n) => {
  return Number(((n * 9 / 5) + 32).toFixed(1));
};

// 12_calculator
const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = (arr) => {
  return arr.reduce((prev, data) => prev + data, 0);
};

const multiply = (arr) => {
  return arr.reduce((prev, data) => prev * data);
};

const power = (a, b) => {
  return a ** b;
};

const factorial = (a) => {
  if (a === 0) return 1;
  
  let f = 1;
  for (let i = 1; i <= a; i++) {
    const data = f * i;
    f = data;
  }

  return f;
};

// 13_palindromes
const palindromes = (s) => {
  let string = [];
  const l = s.length;
  
  for (let i = 0; i < l; i++) {
    const str = s[i].toLowerCase();
    string.push(str);
  }

  const r = string.slice().reverse().join('').replace(/[ .,!]/g, '');
  const d = string.join('').replace(/[ .,!]/g, '');

  if (d === r) return true;
  return false;
};

// 14_fibonacci
const fibonacci = (n) => {
  if (n === 1) return 1;
  else if (n === 0 || n === "0") return 0;
  else if (n <= -1) return 'OOPS'; 

  let a = 0;
  let b = 1;
  let f;

  for (let i = 0; i < n; i++) {
    f = a + b;
    b = a;
    a = f;
  }

  return f;
};

// 15_getTheTitles
const getTheTitles = (arr) => {
    return arr.map(data => data.title);
};

// 16_findTheOldest
const findTheOldest = (arr) => {
  const age = (b, d) => {
    if (!d) d = new Date().getFullYear();
    return d - b;
  };

  return arr.reduce((prev, curr) => {
    const p = age(prev.yearOfBirth, prev.yearOfDeath);
    const c = age(curr.yearOfBirth, curr.yearOfDeath);
    return c > p ? curr : prev;
  });
};
