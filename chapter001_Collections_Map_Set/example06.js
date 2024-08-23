// Set Examples
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will not be added
console.log(mySet); // Output: Set { 1, 2 }

// Check if Value Exists
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(3)); // Output: false

// Delete a Value
mySet.delete(1);
console.log(mySet.has(1)); // Output: false

// Iterate Over a Set
mySet.add("a");
mySet.add("b");

for (let value of mySet) {
    console.log(value);
}
// Output:
// 2
// a
// b

// Convert Set to Array
let arrayFromSet = Array.from(mySet);
console.log(arrayFromSet); // Output: [2, 'a', 'b']

// Get Set Size
console.log(mySet.size); // Output: 3

// Clear a Set
mySet.clear();
console.log(mySet); // Output: Set {}

// Check if Set is empty
console.log(mySet.size === 0); // Output: true

