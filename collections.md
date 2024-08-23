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
