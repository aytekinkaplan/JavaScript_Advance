const fruits = new Map();
fruits.set("apple", "red");
fruits.set("banana", "yellow");
fruits.set("orange", "orange");
fruits.set("grape", "purple");
fruits.set("mango", "yellow");
console.log(fruits);
// Output: Map { 'apple' => 'red', 'banana' => 'yellow', 'orange' => 'orange', 'grape' => 'purple', 'mango' => 'yellow' }

// iterate over keys
for (const key of fruits.keys()) {
  console.log(key);
}
// Output: apple
//         banana
//         orange
//         grape
//         mango

// iterate over values
for (const value of fruits.values()) {
  console.log(value);
}
// Output: red
//         yellow
//         orange
//         purple
//         yellow

// iterate over map with key value pair
for (const [key, value] of fruits) {
  console.log(key, value);
}
// Output: apple red
//         banana yellow
//         orange orange
//         grape purple
//         mango yellow

// iterate over map with forEach()
fruits.forEach((value, key) => {
  console.log(key, value);
});
// Output: apple red
//         banana yellow
//         orange orange
//         grape purple
//         mango yellow