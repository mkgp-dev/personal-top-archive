// Translate border-left-width to borderLeftWidth
function camelize(s) {
   const string = s.split('-');
   const capital = string.slice(1).map(i => i.charAt(0).toUpperCase() + i.slice(1)).join('');
   //for (let i = 1; i < string.length; i++) {
      //string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
   //}
   return [string[0], capital].join('');
}

// Filter range
function filterRange(arr, a, b) {
   const g = arr.filter(value => value >= a);
   const l = g.filter(value => value <= b);
   return l;
}

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
   const l = arr.length;
   const n = arr.filter(value => value >= a && value <= b);
   arr.splice(0, l, ...n);
}

// Sort in decreasing order
arr.sort((a, b) => a > b ? 1 : -1);

// Copy and sort array
function copySorted(a) {
   return a.sort((a, b) => a > b ? 1 : -1);
}

// Shuffle an array
function shuffle(a) {
   for (let i = a.length - 1; i > 0; i--) {
      let r = Math.floor(Math.random() * (i + 1));
      let temp = a[i];
      a[i] = a[r];
      a[r] = temp;
   }

   return a;
}

// Filter unique array members
function unique(arr) {
   return [...new Set(arr)];
}

// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let users = [ john, pete, mary ];

let names = users.map((a) => a.name);
console.log(names);

// Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(a => ({
  fullName: `${a.name} ${a.surname}`,
  id: a.id
}));

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

// Sort users by age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = (arr) => {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
};

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

// Get average age
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (arr) => {
  return arr.reduce((prev, data) => prev + data.age, 0) / arr.length;
};

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Create keyed object from array
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

const groupById = (arr) => {
  return arr.reduce((prev, data) => {
    if(prev[data.id] === null) prev[data.id] = data.id;
    prev[data.id] = data;
    return prev;
  }, {});
};

let usersById = groupById(users);
console.log(usersById);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
