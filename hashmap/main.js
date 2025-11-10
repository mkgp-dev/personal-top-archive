import HashMap from "./lib/map.js";
import HashSet from "./lib/set.js";

// Create a new map
const map = new HashMap();

// Insert values
map.set('apple', 'red');
map.set('banana', 'yellow');
map.set('carrot', 'orange');
map.set('dog', 'brown');
map.set('elephant', 'gray');
map.set('frog', 'green');
map.set('grape', 'purple');
map.set('hat', 'black');
map.set('ice cream', 'white');
map.set('jacket', 'blue');
map.set('kite', 'pink');
map.set('lion', 'golden');

// Trigger load and capacity
map.set('moon', 'silver');

// How many keys stored
console.log('map.length():', map.length());

// Get a value for a specific string
console.log('map.get(key):', map.get('apple'));

// Check if key exist
console.log('map.has(key):', map.has('lion'));
console.log('map.has(key):', map.has('human'));

// Show all keys
console.log('map.key():', map.keys());

// Show all values
console.log('map.values():', map.values());

// Show everything
console.log('map.entries():', map.entries());

// Overwrite a value from a key
map.set('apple', 'dark red');
console.log('map.get(key):', map.get('apple'));

// Remove a specific key
console.log('map.remove(key):', map.remove('dog'));
console.log('map.remove(key):', map.remove('human'));
console.log('map.length():', map.length());

// Clear everything
map.clear();
console.log('map.length():', map.length());
console.log('map.key():', map.keys());

// Create a new set
const set = new HashSet();

// Insert values
set.set('apple');
set.set('banana');
set.set('carrot');
set.set('dog');
set.set('elephant');
set.set('frog');
set.set('grape');
set.set('hat');
set.set('ice cream');
set.set('jacket');
set.set('kite');
set.set('lion');

// Trigger load and capacity
set.set('moon');

// How many keys stored
console.log('set.length():', set.length());

// Check if key exist
console.log('set.has(key)', set.has('moon'));
console.log('set.has(key)', set.has('human'));

// Show all keys
console.log('set.keys()', set.keys());

// Show everything
console.log('set.entries()', set.entries());

// Remove a specific key
console.log('set.remove(key)', set.remove('grape'));
console.log('set.remove(key)', set.remove('human'));
console.log('set.length():', set.length());

// Clear everything
set.clear();
console.log('set.length():', set.length());
console.log('set.keys()', set.keys());