// Iterators

// Define an iterable object
const iterable = [1, 2, 3, 4, 5];

// Create an iterator
const iterator = iterable[Symbol.iterator]();

console.log(iterator);

// Get elements from the iterator
let result = iterator.next();
while (!result.done) {
    console.log(result.value); // Print the current value
    result = iterator.next(); // Get the next element
}