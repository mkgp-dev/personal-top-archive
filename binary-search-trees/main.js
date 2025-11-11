import Tree from "./lib/tree.js";

const random = (n) => Array.from({ length: n }, () => Math.floor(Math.random() * 100));
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (!node) return;
    if (node.right) prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left) prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
};
const printOrder = (transverse) => {
    const array = [];
    transverse(node => array.push(node.data));
    return array.join(', ');
};

// Initiate random array values
const array = random(20);
console.log('Generate random numbers:', array);

// Initiate tree
const tree = new Tree(array);
console.log('Initial prettyPrint:');
prettyPrint(tree.root);

// Check if its balance
console.log('Is everything balanced?', tree.isBalanced());

// Orders
console.log('levelOrderForEach:', printOrder(fn => tree.levelOrderForEach(fn)));
console.log('inOrderForEach:', printOrder(fn => tree.inOrderForEach(fn)));
console.log('preOrderForEach:', printOrder(fn => tree.preOrderForEach(fn)));
console.log('postOrderForEach:', printOrder(fn => tree.postOrderForEach(fn)));

// Make the tree unbalance
[5000, 8080, 1024, 443, 65535, 587].forEach(value => tree.insert(value));
prettyPrint(tree.root);
console.log('Result of unbalance:', tree.isBalanced());

// Make the tree balance again
tree.rebalance();
prettyPrint(tree.root);
console.log('After rebalance():', tree.isBalanced());

// Height and Depth
const idx = array[0];
console.log('height(value):', tree.height(idx));
console.log('depth(value):', tree.depth(idx));

// Find a specific value
console.log('find 69:', tree.find(69));
console.log('find 8080:', tree.find(8080));

// Orders after rebalance
console.log('rebalance_levelOrderForEach:', printOrder(fn => tree.levelOrderForEach(fn)));
console.log('rebalance_inOrderForEach:', printOrder(fn => tree.inOrderForEach(fn)));
console.log('rebalance_preOrderForEach:', printOrder(fn => tree.preOrderForEach(fn)));
console.log('rebalance_postOrderForEach:', printOrder(fn => tree.postOrderForEach(fn)));

// Delete specific values
[idx, 8080, 65535].forEach(value => tree.deleteItem(value));
prettyPrint(tree.root);
console.log('After deleteItem(value):', tree.isBalanced());