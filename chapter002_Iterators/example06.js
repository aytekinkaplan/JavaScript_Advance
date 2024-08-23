// Use of Array.from()

const iterable = [1, 2, 3, 4, 5];

const newArray = Array.from(iterable);

const newArray2 = newArray.map((value) => value ** 2);

console.log(newArray2);

// Shortcut

const newArray3 = Array.from(iterable, (value) => value ** 2);
console.log(newArray3);
