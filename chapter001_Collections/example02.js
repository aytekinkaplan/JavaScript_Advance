const myMap = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
]);
// first numbers in Arrays are key, second numbers are values assinged to these keys

console.log(myMap);

// Output: Map { 1 => 2, 3 => 4, 5 => 6 }

console.log(myMap.get(3)); // Output: 4

console.log(myMap.size); // Output: 3

console.log(myMap.has(3)); // Output: true

console.log(myMap.has(7)); // Output: false

myMap.delete(3);
console.log(myMap.has(3)); // Output: false

console.log(myMap.size); // Output: 2

console.log(myMap); // Output: Map { 1 => 2, 5 => 6 }

myMap.clear();
console.log(myMap.size); // Output: 0
console.log(myMap); // Output: Map {}
