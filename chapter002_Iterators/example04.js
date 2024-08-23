// Use of `for...of`

const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}

// Output:
// 1
// 2
// 3
// 4
// 5

// This example uses `for...of` to iterate over an array. `for...of` is a statement that iterates over all elements of an iterable object.

// Note: The `for...of` loop is a modern alternative to the `for...in` loop.

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// Note: The `for...of` loop is not enumerable.

// More examples:

// Use of `for...of` with objects
const person = {
  name: "John",
  species: "Homo sapiens",
  gender: "male",
  age: 30,
  friends: ["Jane", "Mary", "Peter", "David"],
  occupation: "Engineer",
};
for (let property of person) {
  console.log(`${property}: ${person[property]}`);
}

// Output:
// name: John
// species: Homo sapiens
// gender: male
// age: 30
// friends: (4) ['Jane', 'Mary', 'Peter', 'David']
// occupation: Engineer

// Use of `for...of` with strings
const text = "Hello, World!";
for (let character of text) {
  console.log(character);
}

// Output:
// H
// e
// l
// l
// o
// ,
//   W
// o
// r
// l
// d
// !

// This example uses `for...of` to iterate over a string. `for...of` is a statement that iterates over all characters of a string.
