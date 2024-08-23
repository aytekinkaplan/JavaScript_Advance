// Use of `for...in`

const person = {
  name: "John",
  species: "Homo sapiens",
  gender: "male",
  age: 30,
  friends: ["Jane", "Mary", "Peter", "David"],
  occupation: "Engineer",
};

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

// Output:
// name: John
// species: Homo sapiens
// gender: male
// age: 30
// friends: (4) ['Jane', 'Mary', 'Peter', 'David']
// occupation: Engineer

// This example uses `for...in` to iterate over an object's properties. `for...in` is a statement that iterates over all enumerable properties of an object.
