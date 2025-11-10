import LinkedList from "./lib/list.js";

// Create a new list
const list = new LinkedList();

// Insert values
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.append('donkey');

// Remove the last one
list.pop();

// Add a value at start
list.prepend('elephant');

// Usage of other functions
// Check the whole list
console.log('toString():', list.toString());

// How many existing
console.log('size():', list.size());

// Current head
console.log('head():', list.head());

// Current tail
console.log('tail():', list.tail());

// What index contains
console.log('at(index):', list.at(1));

// Check if certain string exist
console.log('contains(value):', list.contains('elephant'));
console.log('contains(value):', list.contains('parrot'));
console.log('contains(value):', list.contains('donkey'));

// Insert a new value with a specific index
list.insertAt('rabbit', 3);
list.insertAt('tiger', 8);

// Remove a value with a specific index
console.log('removeAt(index):', list.removeAt(0));

// Show the final result of modifications
console.log('toString():', list.toString());
console.log('size():', list.size());
console.log('head():', list.head());
console.log('tail():', list.tail());