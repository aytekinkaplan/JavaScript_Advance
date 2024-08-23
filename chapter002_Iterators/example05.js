// Use of Array.from()

const iterable = [1, 2, 3, 4, 5];

const newArray = Array.from(iterable);
console.log(newArray);
// Output: [1, 2, 3, 4, 5]

const string = "hello";
const stringArray = Array.from(string);
console.log(stringArray);
// Output: ['h', 'e', 'l', 'l', 'o']

const set = new Set([1, 2, 3, 4, 5]);
const setArray = Array.from(set);
console.log(setArray);
// Output: [1, 2, 3, 4, 5]

const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
const mapArray = Array.from(map.values());
console.log(mapArray);
// Output: [1, 2, 3]


// Array.from(arrayLike, function mapFn(currentValue, index, array) { ... }, thisArg) full example

// from string
const arr = Array.from("foo");
console.log(arr);
// Output: ['f', 'o', 'o']


// from set
const arr2 = Array.from(new Set([1, 2, 3, 4, 5]));
console.log(arr2);
// Output: [1, 2, 3, 4, 5]

// from map
const arr3 = Array.from(new Map([["a", 1], ["b", 2], ["c", 3]]));
console.log(arr3);
// Output: [1, 2, 3]

// from a node list
const arr4 = Array.from(document.querySelectorAll("p"));
console.log(arr4);
// Output: [p, p, p]