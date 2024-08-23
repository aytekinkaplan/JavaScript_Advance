// Iterators

const iterable = [1, 2, 3, 4, 5];

const iterator = iterable[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Output:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: 5, done: false }
// { value: undefined, done: true }

// Another example

const string = "hello";
const stringIterator = string[Symbol.iterator]();
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());
console.log(stringIterator.next());

// Output:
// { value: 'h', done: false }
// { value: 'e', done: false }
// { value: 'l', done: false }
// { value: 'l', done: false }
// { value: 'o', done: false }
// { value: undefined, done: true }
