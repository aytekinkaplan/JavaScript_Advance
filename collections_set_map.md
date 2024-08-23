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

Here’s a more detailed and high-quality example, with explanations:

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

Here is the explanation for each line of code, with comments directly above each code line:

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

## More Examples

Providing 50 examples would be quite extensive for a single interaction. Instead, I can give you a comprehensive set of examples that cover various scenarios with `Map` and `Set` in JavaScript. Here are several detailed examples to illustrate different use cases:

### Map Examples

1. **Basic Usage**:

   ```javascript
   let map = new Map();
   map.set("color", "blue");
   map.set("size", "medium");
   console.log(map.get("color")); // Output: blue
   ```

2. **Using Objects as Keys**:

   ```javascript
   let objKey = { id: 1 };
   map.set(objKey, "Object Value");
   console.log(map.get(objKey)); // Output: Object Value
   ```

3. **Check if a Key Exists**:

   ```javascript
   console.log(map.has("size")); // Output: true
   ```

4. **Delete a Key-Value Pair**:

   ```javascript
   map.delete("size");
   console.log(map.has("size")); // Output: false
   ```

5. **Iterate Over a Map**:

   ```javascript
   map.set("name", "Alice");
   map.set("age", 30);

   for (let [key, value] of map) {
     console.log(`${key}: ${value}`);
   }
   // Output:
   // name: Alice
   // age: 30
   ```

6. **Using Map with Arrays as Keys**:

   ```javascript
   let arrKey = [1, 2, 3];
   map.set(arrKey, "Array Value");
   console.log(map.get(arrKey)); // Output: Array Value
   ```

7. **Convert Map to Array**:

   ```javascript
   let arrayFromMap = Array.from(map);
   console.log(arrayFromMap); // Output: [['name', 'Alice'], ['age', 30], ['color', 'blue']]
   ```

8. **Get Map Size**:

   ```javascript
   console.log(map.size); // Output: 3
   ```

9. **Clear a Map**:

   ```javascript
   map.clear();
   console.log(map.size); // Output: 0
   ```

10. **Default Map Initialization**:
    ```javascript
    let newMap = new Map([
      ["key1", "value1"],
      ["key2", "value2"],
    ]);
    console.log(newMap.get("key1")); // Output: value1
    ```

### Set Examples

1. **Basic Usage**:

   ```javascript
   let set = new Set();
   set.add(1);
   set.add(2);
   set.add(2); // Duplicate, will not be added
   console.log(set); // Output: Set { 1, 2 }
   ```

2. **Check if Value Exists**:

   ```javascript
   console.log(set.has(1)); // Output: true
   console.log(set.has(3)); // Output: false
   ```

3. **Delete a Value**:

   ```javascript
   set.delete(1);
   console.log(set.has(1)); // Output: false
   ```

4. **Iterate Over a Set**:

   ```javascript
   set.add("a");
   set.add("b");

   for (let value of set) {
     console.log(value);
   }
   // Output:
   // 2
   // a
   // b
   ```

5. **Convert Set to Array**:

   ```javascript
   let arrayFromSet = Array.from(set);
   console.log(arrayFromSet); // Output: [2, 'a', 'b']
   ```

6. **Get Set Size**:

   ```javascript
   console.log(set.size); // Output: 3
   ```

7. **Clear a Set**:

   ```javascript
   set.clear();
   console.log(set.size); // Output: 0
   ```

8. **Set of Objects**:

   ```javascript
   let setOfObjects = new Set();
   let obj1 = { name: "Alice" };
   let obj2 = { name: "Bob" };

   setOfObjects.add(obj1);
   setOfObjects.add(obj2);
   console.log(setOfObjects.size); // Output: 2
   ```

9. **Union of Two Sets**:

   ```javascript
   let setA = new Set([1, 2, 3]);
   let setB = new Set([3, 4, 5]);

   let union = new Set([...setA, ...setB]);
   console.log(union); // Output: Set { 1, 2, 3, 4, 5 }
   ```

10. **Intersection of Two Sets**:
    ```javascript
    let intersection = new Set([...setA].filter((x) => setB.has(x)));
    console.log(intersection); // Output: Set { 3 }
    ```

### Additional Examples

11. **Difference of Two Sets**:

    ```javascript
    let difference = new Set([...setA].filter((x) => !setB.has(x)));
    console.log(difference); // Output: Set { 1, 2 }
    ```

12. **Convert Map Keys to Set**:

    ```javascript
    let mapKeys = new Set(map.keys());
    console.log(mapKeys); // Output: Set { 'key1', 'key2' }
    ```

13. **Using Map with Functions as Keys**:

    ```javascript
    let funcKey = function () {};
    map.set(funcKey, "Function Value");
    console.log(map.get(funcKey)); // Output: Function Value
    ```

14. **Checking Set Equality**:

    ```javascript
    let set1 = new Set([1, 2, 3]);
    let set2 = new Set([1, 2, 3]);

    let areEqual =
      [...set1].every((value) => set2.has(value)) && set1.size === set2.size;
    console.log(areEqual); // Output: true
    ```

15. **Using a Set to Remove Duplicates from an Array**:
    ```javascript
    let numbers = [1, 2, 2, 3, 4, 4, 5];
    let uniqueNumbers = [...new Set(numbers)];
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
    ```

### Map Advanced Use Cases

16. **Chaining Map Methods**:

    ```javascript
    map.set("key3", "value3").set("key4", "value4");
    console.log(map.get("key3")); // Output: value3
    ```

17. **Using WeakMap**:

    ```javascript
    let weakMap = new WeakMap();
    let obj = {};
    weakMap.set(obj, "WeakMap Value");
    console.log(weakMap.get(obj)); // Output: WeakMap Value
    ```

18. **Map with Array Destructuring**:

    ```javascript
    for (let [key, value] of map.entries()) {
      console.log(`${key}: ${value}`);
    }
    ```

19. **Map with Nested Objects**:

    ```javascript
    let nestedMap = new Map();
    nestedMap.set("outer", new Map([["inner", "value"]]));
    console.log(nestedMap.get("outer").get("inner")); // Output: value
    ```

20. **Cloning a Map**:
    ```javascript
    let originalMap = new Map([["key1", "value1"]]);
    let clonedMap = new Map(originalMap);
    console.log(clonedMap.get("key1")); // Output: value1
    ```

### Set Advanced Use Cases

21. **Converting a Set Back to String**:

    ```javascript
    let strSet = new Set("hello");
    let uniqueStr = [...strSet].join("");
    console.log(uniqueStr); // Output: helo
    ```

22. **Nested Sets**:

    ```javascript
    let nestedSet = new Set();
    let innerSet = new Set([1, 2]);
    nestedSet.add(innerSet);
    console.log(nestedSet); // Output: Set { Set { 1, 2 } }
    ```

23. **Using WeakSet**:

    ```javascript
    let weakSet = new WeakSet();
    let object1 = {};
    weakSet.add(object1);
    console.log(weakSet.has(object1)); // Output: true
    ```

24. **Set with Complex Objects**:

    ```javascript
    let setOfObjects = new Set([{ name: "Alice" }, { name: "Bob" }]);
    console.log(setOfObjects.size); // Output: 2
    ```

25. **Filtering Unique Objects with a Set**:
    ```javascript
    let people = [{ id: 1 }, { id: 2 }, { id: 1 }];
    let uniquePeople = [
      ...new Map(people.map((obj) => [obj.id, obj])).values(),
    ];
    console.log(uniquePeople); // Output: [{ id: 1 }, { id: 2 }]
    ```

### Combined Use Cases

26. **Using Map and Set Together**:

    ```javascript
    let map = new Map();
    map.set("set1", new Set([1, 2, 3]));
    map.set("set2", new Set([3, 4, 5]));

    for (let [key, set] of map) {
      console.log(`${key}: ${[...set]}`);
    }
    // Output:

    // set1: 1,2,3
    // set2: 3,4,5
    ```

27. **Map with Default Values**:

    ```javascript
    let defaultMap = new Map([["key1", "value1"]]);
    let defaultValue = defaultMap.get("key2") || "default value";
    console.log(defaultValue); // Output: default value
    ```

28. **Using Sets for Mathematical Operations**:

    ```javascript
    let setA = new Set([1, 2, 3, 4]);
    let setB = new Set([3, 4, 5, 6]);

    let union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5, 6}
    let intersection = new Set([...setA].filter((x) => setB.has(x))); // {3, 4}
    let difference = new Set([...setA].filter((x) => !setB.has(x))); // {1, 2}

    console.log(union, intersection, difference);
    ```

29. **Complex Key in Map**:

    ```javascript
    let complexMap = new Map();
    let keyObj = { a: 1 };
    let keyArr = [1, 2, 3];

    complexMap.set(keyObj, "object value");
    complexMap.set(keyArr, "array value");

    console.log(complexMap.get(keyObj)); // Output: object value
    console.log(complexMap.get(keyArr)); // Output: array value
    ```

30. **Using Sets for Unique Strings**:
    ```javascript
    let words = "hello world hello universe";
    let uniqueWords = new Set(words.split(" "));
    console.log(uniqueWords); // Output: Set { 'hello', 'world', 'universe' }
    ```

### More Advanced Examples

31. **Using Sets to Find Duplicates**:

    ```javascript
    let nums = [1, 2, 3, 4, 5, 3, 2, 1];
    let duplicates = nums.filter((item, index) => nums.indexOf(item) !== index);
    console.log([...new Set(duplicates)]); // Output: [3, 2, 1]
    ```

32. **Map with Multiple Data Types**:

    ```javascript
    let mixedMap = new Map();
    mixedMap.set(1, "Number");
    mixedMap.set("1", "String");
    mixedMap.set(true, "Boolean");

    console.log(mixedMap.get(1)); // Output: Number
    console.log(mixedMap.get("1")); // Output: String
    console.log(mixedMap.get(true)); // Output: Boolean
    ```

33. **Sets and Maps with JSON Objects**:

    ```javascript
    let jsonMap = new Map();
    let jsonObject = { id: 1, name: "John" };
    jsonMap.set(JSON.stringify(jsonObject), "JSON Value");

    console.log(jsonMap.get(JSON.stringify({ id: 1, name: "John" }))); // Output: JSON Value
    ```

34. **Counting Occurrences with Map**:

    ```javascript
    let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
    let fruitCount = new Map();

    fruits.forEach((fruit) => {
      fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);
    });

    console.log(fruitCount); // Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
    ```

35. **Sets with Symbol Data Type**:

    ```javascript
    let sym1 = Symbol("id");
    let sym2 = Symbol("id");

    let symbolSet = new Set();
    symbolSet.add(sym1);
    symbolSet.add(sym2);

    console.log(symbolSet.size); // Output: 2 (since symbols are unique)
    ```

### ES6 Set and Map Edge Cases

36. **Map with Infinity as Key**:

    ```javascript
    let map = new Map();
    map.set(Infinity, "Infinite Value");
    console.log(map.get(Infinity)); // Output: Infinite Value
    ```

37. **Set with undefined and null**:

    ```javascript
    let set = new Set([undefined, null]);
    console.log(set); // Output: Set { undefined, null }
    ```

38. **Using Map in JSON Serialization**:

    ```javascript
    let map = new Map([
      ["name", "Alice"],
      ["age", 25],
    ]);
    let json = JSON.stringify(Array.from(map));
    console.log(json); // Output: [["name","Alice"],["age",25]]
    ```

39. **Map with Function Values**:

    ```javascript
    let map = new Map();
    map.set("sayHello", () => "Hello!");
    console.log(map.get("sayHello")()); // Output: Hello!
    ```

40. **Nested Sets for Advanced Data Handling**:

    ```javascript
    let mainSet = new Set();
    let innerSet1 = new Set([1, 2, 3]);
    let innerSet2 = new Set([4, 5, 6]);

    mainSet.add(innerSet1);
    mainSet.add(innerSet2);

    console.log(mainSet); // Output: Set { Set { 1, 2, 3 }, Set { 4, 5, 6 } }
    ```

### Optimized Performance with Set and Map

41. **Map Performance for Frequent Updates**:

    ```javascript
    let updateMap = new Map();
    for (let i = 0; i < 1000; i++) {
      updateMap.set(`key${i}`, i);
    }
    console.log(updateMap.size); // Output: 1000
    ```

42. **Set for Efficient Membership Check**:

    ```javascript
    let ids = new Set([100, 200, 300, 400]);
    console.log(ids.has(300)); // Output: true
    console.log(ids.has(500)); // Output: false
    ```

43. **Filtering Unique Values with Sets**:

    ```javascript
    let numbers = [1, 1, 2, 3, 3, 4];
    let uniqueNumbers = [...new Set(numbers)];
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4]
    ```

44. **Merging Two Maps**:

    ```javascript
    let map1 = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    let map2 = new Map([
      ["c", 3],
      ["d", 4],
    ]);
    let mergedMap = new Map([...map1, ...map2]);

    console.log(mergedMap); // Output: Map { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }
    ```

45. **Map as a Cache Storage**:
    ```javascript
    let cache = new Map();
    function getData(key) {
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        // Assume fetchData is a function that fetches data
        let value = `Data for ${key}`;
        cache.set(key, value);
        return value;
      }
    }
    console.log(getData("user1")); // Output: Data for user1
    ```

### Sets and Maps in Real-World Scenarios

46. **Tracking Online Users with Set**:

    ```javascript
    let onlineUsers = new Set();
    onlineUsers.add("user1");
    onlineUsers.add("user2");
    onlineUsers.delete("user1");

    console.log(onlineUsers); // Output: Set { 'user2' }
    ```

47. **Using Map for Configuration Settings**:

    ```javascript
    let config = new Map();
    config.set("theme", "dark");
    config.set("version", "1.2.0");

    console.log(config.get("theme")); // Output: dark
    ```

48. **Set to Handle Unique Email Addresses**:

    ```javascript
    let emails = new Set([
      "test@example.com",
      "user@example.com",
      "test@example.com",
    ]);
    console.log(emails); // Output: Set { 'test@example.com', 'user@example.com' }
    ```

49. **Map to Count Word Frequencies**:

    ```javascript
    let text = "hello world hello";
    let words = text.split(" ");
    let wordMap = new Map();

    words.forEach((word) => {
      wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });

    console.log(wordMap); // Output: Map { 'hello' => 2, 'world' => 1 }
    ```

50. **Sets and Maps for Handling Unique Identifiers**:

    ```javascript
    let uniqueIDs = new Set();
    let idMap = new Map();

    let ids = [101, 102, 103, 101, 102];
    ids.forEach((id) => {
      uniqueIDs.add(id);
      idMap.set(id, (idMap.get(id) || 0) + 1);
    });

    console.log(uniqueIDs); // Output: Set { 101, 102, 103 }
    console.log(idMap); // Output: Map { 101 => 2, 102 => 2, 103 => 1 }
    ```

These examples demonstrate

various ways `Map` and `Set` can be used in JavaScript, from simple key-value storage and unique value collections to more advanced operations like filtering, counting, and managing complex data structures.

```javascript
// Create a new Map instance to store fruit names and their colors
const fruits = new Map();

// Add key-value pairs to the map
fruits.set("apple", "red"); // The key "apple" is associated with the value "red"
fruits.set("banana", "yellow"); // The key "banana" is associated with the value "yellow"
fruits.set("orange", "orange"); // The key "orange" is associated with the value "orange"
fruits.set("grape", "purple"); // The key "grape" is associated with the value "purple"
fruits.set("mango", "yellow"); // The key "mango" is associated with the value "yellow"

// Output the entire map
console.log(fruits);
// Output: Map { 'apple' => 'red', 'banana' => 'yellow', 'orange' => 'orange', 'grape' => 'purple', 'mango' => 'yellow' }

// Iterate over the keys of the map
for (const key of fruits.keys()) {
  console.log(key);
}
// Output: apple
//         banana
//         orange
//         grape
//         mango
// This loop iterates through the keys of the map and logs each key to the console.

// Iterate over the values of the map
for (const value of fruits.values()) {
  console.log(value);
}
// Output: red
//         yellow
//         orange
//         purple
//         yellow
// This loop iterates through the values of the map and logs each value to the console.

// Iterate over the map with key-value pairs
for (const [key, value] of fruits) {
  console.log(key, value);
}
// Output: apple red
//         banana yellow
//         orange orange
//         grape purple
//         mango yellow
// This loop iterates through the map entries (key-value pairs) and logs each pair to the console.

// Iterate over the map with forEach()
fruits.forEach((value, key) => {
  console.log(key, value);
});
// Output: apple red
//         banana yellow
//         orange orange
//         grape purple
//         mango yellow
// This method iterates through each entry in the map and executes the provided callback function, logging each key-value pair to the console.
```

### Explanation of Loops

1. **Iterating Over Keys (`for...of` with `keys()`):**

   - The `keys()` method returns an iterator for the keys of the map.
   - This loop logs each key in the map.
   - Useful for when you need to work with the keys specifically, without concern for their associated values.

2. **Iterating Over Values (`for...of` with `values()`):**

   - The `values()` method returns an iterator for the values of the map.
   - This loop logs each value in the map.
   - Useful for when you only need the values and not the keys.

3. **Iterating Over Entries (`for...of` with `Map` directly):**

   - When you iterate over a map directly, it returns entries as `[key, value]` pairs.
   - This loop logs both the key and the value together.
   - Useful when you need to work with both keys and values simultaneously.

4. **Using `forEach()`:**
   - The `forEach()` method executes a provided function once for each map entry.
   - It takes a callback function with parameters for the value and the key.
   - This method provides a convenient way to perform operations on each key-value pair.

Each method provides a different way to iterate over the elements of a `Map`, depending on what information you need and how you want to process it.

```javascript
// Array of words to be cleaned and processed
const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// Function to clean and return unique anagrams from the array
function cleanArray(arr) {
  // Create a new Map instance to store normalized keys and their corresponding original values
  let map = new Map();

  // Iterate over each word in the array
  for (let value of arr) {
    // Normalize the word by converting to lowercase, sorting characters, and joining them back together
    let key = value.toLowerCase().split("").sort().join("");
    // Use the normalized key to store the original word in the map
    map.set(key, value);
  }

  // Return an array of unique values by converting map values to an array
  return Array.from(map.values());
}

// Output the result of the cleanArray function
console.log(cleanArray(arr));
// Output: [ 'nap', 'teachers', 'hectares' ]
```

### Explanation of Code

1. **Array Initialization:**

   ```javascript
   const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
   ```

   - Initializes an array of words that may contain anagrams and duplicates.

2. **Function Definition (`cleanArray`):**

   ```javascript
   function cleanArray(arr) {
     let map = new Map();
   ```

   - Defines a function `cleanArray` that takes an array as an argument.
   - Initializes an empty `Map` called `map` to store unique anagrams.

3. **Processing Each Word:**

   ```javascript
   for (let value of arr) {
     let key = value.toLowerCase().split("").sort().join("");
     map.set(key, value);
   }
   ```

   - Iterates over each word (`value`) in the input array.
   - Converts the word to lowercase to ensure case insensitivity.
   - Splits the word into an array of characters, sorts the characters, and then joins them back into a string. This creates a normalized key that is the same for anagrams.
   - Uses this normalized key to store the original word in the `Map`. If the key already exists, the new value will overwrite the old one, ensuring only one unique word per key.

4. **Returning Unique Values:**

   ```javascript
   return Array.from(map.values());
   ```

   - Converts the values of the `Map` into an array and returns it.
   - This array contains only unique words, as duplicate anagrams have been removed.

5. **Output the Result:**

   ```javascript
   console.log(cleanArray(arr));
   ```

   - Calls the `cleanArray` function with the input array and logs the result.
   - The output is an array of unique words, each representing a different group of anagrams.

**Output Explanation:**

- The function `cleanArray` effectively filters out duplicates by using normalized keys for anagrams. Words like "nap" and "PAN" which are anagrams of each other result in a single unique word in the final output. The same applies to other anagrams such as "ear" and "era", and "teachers" and "cheaters".

##Set
A Set is a specialized type of collection used to store unique values. This means that each value in the Set can appear only once, making it particularly useful for ensuring that no duplicates are present in the collection.

Unlike a Map, which stores data in key/value pairs, a Set is more similar to an Array in that it contains a list of values. However, while Arrays are indexed and can contain duplicate values, Sets do not use indexes and automatically prevent duplicates. This makes Sets an effective tool for managing collections where uniqueness is a key requirement.

One important feature of Sets in ES6 (ECMAScript 2015) is that they maintain the order of elements. This means that when you iterate over a Set, the values are returned in the order in which they were added. This is different from some other programming languages, where Sets may not preserve the order of elements.

In summary, Sets offer a way to work with collections of values where uniqueness is essential, and they provide ordered storage and retrieval of elements in ES6, setting them apart from similar constructs in other languages.

Sure, here are the explanations with examples for each use case:

1. **Use when you need to work with unique values**:

   - **Explanation**: Sets are designed to store only unique values. This makes them particularly useful when you need to ensure that no duplicates are present in your collection.
   - **Example**:

     ```javascript
     const uniqueValues = new Set();
     uniqueValues.add(1);
     uniqueValues.add(2);
     uniqueValues.add(2); // This will not be added, as 2 is already in the Set

     console.log(uniqueValues); // Output: Set { 1, 2 }
     ```

2. **Use when high-performance is really important**:

   - **Explanation**: Sets provide efficient performance for operations such as checking for the existence of an element, adding new elements, or removing elements. This efficiency is due to their underlying hash-based structure, which generally offers faster operations compared to arrays, especially as the size of the data grows.
   - **Example**:

     ```javascript
     const largeSet = new Set();
     for (let i = 0; i < 1000000; i++) {
       largeSet.add(i);
     }

     console.time("has");
     console.log(largeSet.has(999999)); // Checks if the element exists
     console.timeEnd("has"); // Output will show the time taken for the check
     ```

3. **Use to remove duplicates from arrays**:

   - **Explanation**: If you have an array with duplicate values and you want to create a new array with only the unique values, you can use a Set. Converting an array to a Set automatically removes duplicates, and you can then convert the Set back to an array if needed.
   - **Example**:

     ```javascript
     const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
     const uniqueArray = [...new Set(arrayWithDuplicates)];

     console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
     ```

Here’s a table that outlines the differences between `Set` and `Object`, as well as the methods of the `Set` object, with explanations:

| **Feature**            | **Set**                                                   | **Object**                                                                     |
| ---------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Key Types**          | Can use any type of values, including objects, as keys.   | Only strings and symbols can be used as keys.                                  |
| **Key Uniqueness**     | Keys (values) are unique; duplicates are not allowed.     | Keys can be overwritten; duplicates are handled by the key itself.             |
| **Convenient Methods** | Provides methods like `add()`, `delete()`, `has()`, etc.  | No built-in methods for direct manipulation; requires custom code.             |
| **Size Property**      | Provides a `size` property to get the number of elements. | No direct property to get the number of keys; needs to be calculated manually. |

### Performance

| **Feature**            | **Set**                                                                                                                                                               | **Array**                                                                        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **Check for Presence** | The `has()` method is generally faster for presence checks compared to `Array.prototype.includes()` when comparing to an array with a length equal to the set’s size. | `includes()` method may be slower for large arrays compared to `Set` operations. |

### Set Methods

| **Method**          | **Description**                                                                                                 | **Example**                         |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `new Set(iterable)` | Creates a new `Set` instance. If an iterable object (like an array) is provided, it copies values into the set. | `const mySet = new Set([1, 2, 3]);` |
| `set.add(value)`    | Adds a value to the set. Returns the set itself, allowing method chaining.                                      | `mySet.add(4);`                     |
| `set.delete(value)` | Removes a value from the set. Returns `true` if the value was present, otherwise `false`.                       | `mySet.delete(3);`                  |
| `set.has(value)`    | Checks if the set contains the specified value. Returns `true` if the value is present, otherwise `false`.      | `mySet.has(2);`                     |
| `set.clear()`       | Removes all values from the set.                                                                                | `mySet.clear();`                    |
| `set.size`          | Returns the number of values in the set.                                                                        | `console.log(mySet.size);`          |

### Iterating Over a Set

| **Method**          | **Description**                                                                                      | **Example**                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `set.values()`      | Returns an iterable for the values in the set.                                                       | `for (const value of mySet.values()) { console.log(value); }`           |
| `set.keys()`        | Alias for `set.values()`. Returns an iterable for the values, included for compatibility with `Map`. | `for (const key of mySet.keys()) { console.log(key); }`                 |
| `set.entries()`     | Returns an iterable for `[value, value]` pairs. This is used by default in `for..of` loops.          | `for (const [value, value] of mySet.entries()) { console.log(value); }` |
| `set.forEach()`     | Executes a provided function once for each value in the set.                                         | `mySet.forEach(value => { console.log(value); });`                      |
| `for..of` Statement | Can be used to iterate over the set directly. This loops through each value in the set.              | `for (const value of mySet) { console.log(value); }`                    |

### Unique Feature

- **Unique Values:** The main feature of a `Set` is that repeated calls to `set.add(value)` with the same value will have no effect. This ensures that each value appears only once in the set.

This table summarizes the primary differences between `Set` and `Object`, and provides detailed information on the methods available in a `Set`, including their descriptions and examples.

Sure, here's an explanation of each part of your code:

### Set Examples

1. **Creating a Set and Adding Values**

   ```javascript
   const mySet = new Set();
   mySet.add(1);
   mySet.add(2);
   mySet.add(2); // Duplicate, will not be added
   console.log(mySet); // Output: Set { 1, 2 }
   ```

   - A `Set` is created and values are added to it.
   - Duplicate values are ignored, so adding `2` again does not change the set.

2. **Checking if a Value Exists in a Set**

   ```javascript
   console.log(mySet.has(1)); // Output: true
   console.log(mySet.has(3)); // Output: false
   ```

   - `has()` method checks if the value `1` is in the set (returns `true`), and if `3` is in the set (returns `false`).

3. **Deleting a Value from a Set**

   ```javascript
   mySet.delete(1);
   console.log(mySet.has(1)); // Output: false
   ```

   - `delete()` removes the value `1` from the set.
   - After deletion, checking for `1` returns `false`.

4. **Iterating Over a Set**

   ```javascript
   mySet.add("a");
   mySet.add("b");

   for (let value of mySet) {
     console.log(value);
   }
   // Output:
   // 2
   // a
   // b
   ```

   - Adds two new values, `"a"` and `"b"`, to the set.
   - Uses a `for...of` loop to iterate over and print each value in the set.

5. **Converting a Set to an Array**

   ```javascript
   let arrayFromSet = Array.from(mySet);
   console.log(arrayFromSet); // Output: [2, 'a', 'b']
   ```

   - `Array.from()` converts the set to an array.

6. **Getting the Size of a Set**

   ```javascript
   console.log(mySet.size); // Output: 3
   ```

   - `size` property returns the number of elements in the set.

7. **Clearing a Set**

   ```javascript
   mySet.clear();
   console.log(mySet); // Output: Set {}
   ```

   - `clear()` removes all elements from the set.

8. **Checking if a Set is Empty**
   ```javascript
   console.log(mySet.size === 0); // Output: true
   ```
   - Checks if the size of the set is `0`, meaning it is empty.

### Working with Sets of Objects

1. **Creating a Set of State Objects**

   ```javascript
   const us_states = new Set();

   us_states.add({ AL: "Alabama" });
   us_states.add({ AK: "Alaska" });
   // ... add all states
   console.log(us_states);
   // Output: Set { {AL: 'Alabama'}, {AK: 'Alaska'}, {AZ: 'Arizona'}, ... }
   ```

   - Creates a set `us_states` and adds objects representing U.S. states.

2. **Iterating Over a Set of Objects**
   ```javascript
   for (let state of us_states) console.log(state);
   ```
   - Iterates over each object in the `us_states` set and prints it.

Keep in mind that each object in the set is a distinct reference, so even if two objects have the same properties, they are considered different unless they are the exact same reference.

## WeakMap

### 1. Table: WeakMap vs Map

| Feature               | WeakMap                                  | Map                                            |
| --------------------- | ---------------------------------------- | ---------------------------------------------- |
| **Key Type**          | Objects only                             | Any value (object, string, etc.)               |
| **Key Reference**     | Weak (can be garbage collected)          | Strong (cannot be garbage collected)           |
| **Access to Keys**    | No, only via `get()` and `has()` methods | Yes, can be iterated (e.g., forEach, for...of) |
| **Size Information**  | No, cannot retrieve size                 | Yes, using the `size` property                 |
| **Memory Management** | Prevents memory leaks, memory efficient  | May lead to memory leaks if not managed        |

### 2. Diagram: Usage of WeakMap

The following diagram illustrates how keys in a WeakMap are referenced and how it optimizes memory management.

```
                WeakMap
           +------------------+
           |                  |
Button1 -->| Key1 --> Value1  |
           |                  |
Button2 -->| Key2 --> Value2  |
           |                  |
           +------------------+
                 |
                 v
  (If references to Button1 and Button2 are removed elsewhere)
                 |
                 v
   They are cleaned up by Garbage Collection
```

### Explanation:

- **WeakMap**: It only accepts object keys. In the example above, `Button1` and `Button2` are object references.
- **Memory Management**: If references to `Button1` and `Button2` are removed from elsewhere, JavaScript's Garbage Collector can automatically remove these objects and their associated entries in the WeakMap from memory. This helps prevent memory leaks and makes the application's memory usage more efficient.

### Use Cases:

1. **Storing Additional Data**: When you need to store extra data on an object (e.g., the number of times a button has been clicked) without modifying the object itself, you can use a WeakMap. For instance, to track how many times different buttons have been clicked.
2. **Preventing Memory Leaks**: WeakMap helps prevent memory leaks by holding weak references to objects, making it critical for long-running applications where memory management is essential.

This table and diagram help illustrate how WeakMap differs from a regular Map and how it optimizes memory management effectively.

Here are some practical examples to illustrate the usage of `WeakMap`:

### Example 1: Tracking User Interactions

Imagine we want to track how many times a user clicks different buttons on a webpage without modifying the button objects directly.

```javascript
// Create a WeakMap to track button clicks
const buttonClickCount = new WeakMap();

// Function to register a click
function registerClick(button) {
  // Check if the button is already in the WeakMap
  if (!buttonClickCount.has(button)) {
    // If not, initialize the count to 0
    buttonClickCount.set(button, 0);
  }
  // Increment the click count for the button
  buttonClickCount.set(button, buttonClickCount.get(button) + 1);
  console.log(`Button clicked ${buttonClickCount.get(button)} times`);
}

// Example usage
const button1 = document.createElement("button");
const button2 = document.createElement("button");

// Simulate button clicks
registerClick(button1); // Output: Button clicked 1 times
registerClick(button1); // Output: Button clicked 2 times
registerClick(button2); // Output: Button clicked 1 times

// If button1 is removed and no references exist, it can be garbage collected
```

### Explanation:

- **WeakMap for Click Count**: Here, `buttonClickCount` is a `WeakMap` where the keys are the button objects, and the values are the number of times each button has been clicked.
- **Garbage Collection**: If the button element is no longer referenced anywhere else in the code, it will be eligible for garbage collection, and the entry in the `WeakMap` will automatically be removed, preventing memory leaks.

### Example 2: Caching Expensive Computations

Imagine a scenario where we want to cache the result of an expensive computation for certain objects without risking memory leaks.

```javascript
// WeakMap to store computed values
const computationCache = new WeakMap();

// Expensive computation function
function expensiveComputation(obj) {
  if (computationCache.has(obj)) {
    // Return cached result if available
    return computationCache.get(obj);
  }

  // Perform the expensive computation
  const result = obj.value * 10; // Example computation

  // Store the result in the WeakMap
  computationCache.set(obj, result);

  return result;
}

// Example usage
const data1 = { value: 5 };
const data2 = { value: 10 };

console.log(expensiveComputation(data1)); // Output: 50
console.log(expensiveComputation(data1)); // Output: 50 (from cache)
console.log(expensiveComputation(data2)); // Output: 100

// If data1 is no longer referenced elsewhere, it can be garbage collected
```

### Explanation:

- **WeakMap for Caching**: In this example, `computationCache` is a `WeakMap` used to store results of expensive computations. If the `obj` (key) is no longer referenced elsewhere, the cached result is automatically removed.
- **Memory Efficiency**: This method of caching ensures that memory is not unnecessarily consumed by objects that are no longer needed, thus preventing memory leaks.

### Example 3: Storing Metadata for DOM Elements

In web development, you might want to store metadata related to specific DOM elements without modifying the elements themselves.

```javascript
// Create a WeakMap to store metadata
const elementMetadata = new WeakMap();

// Function to add metadata to an element
function setMetadata(element, metadata) {
  elementMetadata.set(element, metadata);
}

// Function to get metadata from an element
function getMetadata(element) {
  return elementMetadata.get(element);
}

// Example usage
const divElement = document.createElement("div");
setMetadata(divElement, { role: "admin", theme: "dark" });

console.log(getMetadata(divElement)); // Output: { role: 'admin', theme: 'dark' }

// If divElement is removed from DOM and no references exist, metadata is garbage collected
```

### Explanation:

- **WeakMap for Metadata**: The `elementMetadata` WeakMap stores metadata for specific DOM elements. This allows storing information like user roles, theme preferences, etc., without modifying the actual element or creating potential memory issues.
- **Automatic Cleanup**: If `divElement` is removed from the DOM and no other references to it exist, the metadata entry will be automatically removed by the garbage collector.

These examples demonstrate how `WeakMap` can be effectively used in various scenarios to manage memory efficiently and prevent memory leaks, which is especially useful in large-scale, long-running web applications.
