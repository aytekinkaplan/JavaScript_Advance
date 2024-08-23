# Collections-Set-Map

## Collections

Most major programming languages have several types of data collections.
Python has lists, tuples, and dictionaries. Java has lists, sets, maps, queues.
Ruby has hashes and arrays. JavaScript, up until now, had only arrays.
Objects and arrays were the workhorses of JavaScript. ES6 introduces four new data structures
that will add power and expressiveness to the language: Map, and Set

## Map

Map is similar to objects in JavaScript that allows us to store elements of any type in a key/value pair.

<ul>
  <li>A Map object iterates its elements in insertion order.</li>
  <li>Better performance</li>
  <li>Keys can have any data type</li>
  <li>Easy to iterate</li>
  <li>Easy to compute size</li>
  <li>Use when you simply need to map key to values</li>
  <li>Use when you need keys that are not strings</li>
</ul>

A `Map` object stores key-value pairs, where both keys and values can be of any type. It remembers the original insertion order of the keys. Unlike an object, a `Map` can use objects, functions, and other data types as keys.

To create a new `Map`, you use the following syntax:

```javascript
const myMap = new Map();
```

- The `Map()` constructor can take an optional iterable object, where the elements are key-value pairs.
- A `Map` doesn't have restrictions on key names. You can use names like `toString`, `constructor`, etc., without any issues.

Here's a table comparing JavaScript `Map` and `Object`:

| Feature                                | Map                                                              | Object                                                              |
| -------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------- |
| Key Types                              | Can contain any data type, including objects as keys.            | Only contains strings and symbols as keys.                          |
| Iteration                              | Can be directly iterated, and values can be accessed.            | Can be iterated by accessing its keys.                              |
| Size Determination                     | The number of elements can be determined by the `size` property. | The number of elements must be determined manually.                 |
| Performance (Adding/Removing Elements) | Performs better for frequent addition/removal of elements.       | Does not perform as well for frequent addition/removal of elements. |

This table highlights the key differences between `Map` and `Object` in JavaScript.

Here’s a table summarizing the methods of the `Map` object along with examples:

| Method              | Description                                                                                               | Example                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `new Map()`         | Creates a new empty map.                                                                                  | `const myMap = new Map();`                                               |
| `new Map(iterable)` | Creates a new map with elements from an iterable object.                                                  | `const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);`       |
| `map.size`          | Returns the number of elements in the map.                                                                | `myMap.size`                                                             |
| `clear()`           | Removes all elements from the map.                                                                        | `myMap.clear();`                                                         |
| `delete(key)`       | Removes the element with the specified key. Returns `true` if the element was removed, `false` otherwise. | `myMap.delete('key1');`                                                  |
| `get(key)`          | Returns the value associated with the specified key, or `undefined` if the key does not exist.            | `myMap.get('key1');`                                                     |
| `has(key)`          | Returns `true` if a value associated with the key exists, otherwise `false`.                              | `myMap.has('key1');`                                                     |
| `set(key, value)`   | Sets the value for the specified key. Returns the map object itself, allowing method chaining.            | `myMap.set('key3', 'value3');`                                           |
| `map.keys()`        | Returns an iterable of the map’s keys.                                                                    | `for (let key of myMap.keys()) { console.log(key); }`                    |
| `map.values()`      | Returns an iterable of the map’s values.                                                                  | `for (let value of myMap.values()) { console.log(value); }`              |
| `map.entries()`     | Returns an iterable of `[key, value]` pairs. Used by default in `for..of` loops.                          | `for (let [key, value] of myMap.entries()) { console.log(key, value); }` |
| `map.forEach()`     | Executes a provided function once for each `[key, value]` pair. Similar to array’s `forEach` method.      | `myMap.forEach((value, key) => { console.log(key, value); });`           |

**Examples:**

1. **Creating a Map and Adding Elements:**

   ```javascript
   const myMap = new Map();
   myMap.set("name", "Alice");
   myMap.set("age", 30);
   ```

2. **Using `map.size`, `map.get`, and `map.has`:**

   ```javascript
   console.log(myMap.size); // 2
   console.log(myMap.get("name")); // 'Alice'
   console.log(myMap.has("age")); // true
   ```

3. **Iterating Over a Map:**

   ```javascript
   myMap.forEach((value, key) => {
     console.log(`${key}: ${value}`);
   });

   for (let [key, value] of myMap.entries()) {
     console.log(`${key}: ${value}`);
   }
   ```

   Sure! Here’s a more detailed and high-quality example, with explanations:

### Example: Student Grades Map

In this example, we’ll use a `Map` to store student names as keys and their grades as values. We’ll also demonstrate some `Map` methods.

#### 1. Creating a Map and Adding Data

First, we create a `Map` with student names and their corresponding grades:

```javascript
const studentGrades = new Map([
  ["Alice", 85],
  ["Bob", 92],
  ["Charlie", 78],
  ["Diana", 89],
]);
```

In this code, we create a `Map` with four entries. Each entry consists of a student’s name as the key and their grade as the value.

#### 2. Using Map Methods

- **`size` Property:**

  To get the number of students, use the `size` property:

  ```javascript
  console.log(studentGrades.size); // 4
  ```

- **`get()` Method:**

  To retrieve the grade of a specific student, use the `get()` method:

  ```javascript
  console.log(studentGrades.get("Bob")); // 92
  ```

- **`has()` Method:**

  To check if a student is in the map, use the `has()` method:

  ```javascript
  console.log(studentGrades.has("Charlie")); // true
  console.log(studentGrades.has("Eve")); // false
  ```

- **`delete()` Method:**

  To remove a student from the map, use the `delete()` method:

  ```javascript
  studentGrades.delete("Charlie");
  console.log(studentGrades.has("Charlie")); // false
  ```

- **`clear()` Method:**

  To remove all students from the map, use the `clear()` method:

  ```javascript
  studentGrades.clear();
  console.log(studentGrades.size); // 0
  ```

- **Iterating Over the Map:**

  You can loop through the entries, keys, or values of the map:

  ```javascript
  // Iterate over entries
  for (let [name, grade] of studentGrades.entries()) {
    console.log(`${name}: ${grade}`);
  }

  // Iterate over keys
  for (let name of studentGrades.keys()) {
    console.log(name);
  }

  // Iterate over values
  for (let grade of studentGrades.values()) {
    console.log(grade);
  }

  // Using forEach
  studentGrades.forEach((grade, name) => {
    console.log(`${name}: ${grade}`);
  });
  ```

In this example, we’ve demonstrated how to create a `Map`, add data, and use various `Map` methods to interact with it.

Certainly! Here is the explanation for each line of code, with comments directly above each code line:

```javascript
// Create a new Map instance
let map = new Map();

// Add key-value pairs to the map
map.set("color", "blue"); // The key "color" is associated with the value "blue"
map.set("size", "medium"); // The key "size" is associated with the value "medium"

// Output the entire map
console.log(map); // Output: Map { "color" => "blue", "size" => "medium" }

// Retrieve and output the value associated with the key "color"
console.log(map.get("color")); // Output: blue

// Retrieve and output the value associated with the key "size"
console.log(map.get("size")); // Output: medium

// Output the number of key-value pairs in the map
console.log(map.size); // Output: 2

// Check if the map contains the key "color" and output the result
console.log(map.has("color")); // Output: true

// Check if the map contains the key "size" and output the result
console.log(map.has("size")); // Output: true

// Remove the key-value pair with the key "color"
map.delete("color");

// Check if the map contains the key "color" after deletion and output the result
console.log(map.has("color")); // Output: false

// Output the number of key-value pairs in the map after deletion
console.log(map.size); // Output: 1

// Output the entire map after deletion
console.log(map); // Output: Map { "size" => "medium" }
```

This code demonstrates how to create a `Map`, add and retrieve data, check for the existence of keys, and delete entries. The map starts with two entries and then has one entry removed, which is reflected in the subsequent outputs.
