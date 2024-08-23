# Collections-Set-Map

## Collections

Most major programming languages offer various types of data collections to handle and manage data efficiently. For example, Python provides lists, tuples, and dictionaries. Java offers lists, sets, maps, and queues, while Ruby has hashes and arrays. Historically, JavaScript primarily relied on arrays and objects as its main data structures. However, with the introduction of ES6, JavaScript gained new, powerful data structures: `Map` and `Set`, enhancing its expressiveness and capability.

### Examples

1. **Map**: A `Map` is a collection of key-value pairs where keys can be of any data type. It maintains the order of insertion.

    ```javascript
    let myMap = new Map();
    myMap.set('name', 'Alice');
    myMap.set('age', 30);

    console.log(myMap.get('name')); // Output: Alice
    console.log(myMap.get('age'));  // Output: 30
    ```

2. **Set**: A `Set` is a collection of unique values. It automatically removes duplicate values and does not maintain any particular order.

    ```javascript
    let mySet = new Set();
    mySet.add(1);
    mySet.add(2);
    mySet.add(2); // Duplicate value

    console.log(mySet); // Output: Set { 1, 2 }
    ```

These new data structures provide greater flexibility and efficiency when working with collections in JavaScript.

## Collections-Set-Map Examples

Providing 50 examples would be quite extensive for a single interaction. Instead, I can give you a comprehensive set of examples that cover various scenarios with `Map` and `Set` in JavaScript. Here are several detailed examples to illustrate different use cases:

### Map Examples

1. **Basic Usage**:
    ```javascript
    let map = new Map();
    map.set('color', 'blue');
    map.set('size', 'medium');
    console.log(map.get('color')); // Output: blue
    ```

2. **Using Objects as Keys**:
    ```javascript
    let objKey = { id: 1 };
    map.set(objKey, 'Object Value');
    console.log(map.get(objKey)); // Output: Object Value
    ```

3. **Check if a Key Exists**:
    ```javascript
    console.log(map.has('size')); // Output: true
    ```

4. **Delete a Key-Value Pair**:
    ```javascript
    map.delete('size');
    console.log(map.has('size')); // Output: false
    ```

5. **Iterate Over a Map**:
    ```javascript
    map.set('name', 'Alice');
    map.set('age', 30);

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
    map.set(arrKey, 'Array Value');
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
        ['key1', 'value1'],
        ['key2', 'value2']
    ]);
    console.log(newMap.get('key1')); // Output: value1
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
    set.add('a');
    set.add('b');

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
    let obj1 = { name: 'Alice' };
    let obj2 = { name: 'Bob' };

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
    let intersection = new Set([...setA].filter(x => setB.has(x)));
    console.log(intersection); // Output: Set { 3 }
    ```

### Additional Examples

11. **Difference of Two Sets**:
    ```javascript
    let difference = new Set([...setA].filter(x => !setB.has(x)));
    console.log(difference); // Output: Set { 1, 2 }
    ```

12. **Convert Map Keys to Set**:
    ```javascript
    let mapKeys = new Set(map.keys());
    console.log(mapKeys); // Output: Set { 'key1', 'key2' }
    ```

13. **Using Map with Functions as Keys**:
    ```javascript
    let funcKey = function() {};
    map.set(funcKey, 'Function Value');
    console.log(map.get(funcKey)); // Output: Function Value
    ```

14. **Checking Set Equality**:
    ```javascript
    let set1 = new Set([1, 2, 3]);
    let set2 = new Set([1, 2, 3]);

    let areEqual = [...set1].every(value => set2.has(value)) && set1.size === set2.size;
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
    map.set('key3', 'value3').set('key4', 'value4');
    console.log(map.get('key3')); // Output: value3
    ```

17. **Using WeakMap**:
    ```javascript
    let weakMap = new WeakMap();
    let obj = {};
    weakMap.set(obj, 'WeakMap Value');
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
    nestedMap.set('outer', new Map([['inner', 'value']]));
    console.log(nestedMap.get('outer').get('inner')); // Output: value
    ```

20. **Cloning a Map**:
    ```javascript
    let originalMap = new Map([['key1', 'value1']]);
    let clonedMap = new Map(originalMap);
    console.log(clonedMap.get('key1')); // Output: value1
    ```

### Set Advanced Use Cases

21. **Converting a Set Back to String**:
    ```javascript
    let strSet = new Set('hello');
    let uniqueStr = [...strSet].join('');
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
    let setOfObjects = new Set([{ name: 'Alice' }, { name: 'Bob' }]);
    console.log(setOfObjects.size); // Output: 2
    ```

25. **Filtering Unique Objects with a Set**:
    ```javascript
    let people = [{ id: 1 }, { id: 2 }, { id: 1 }];
    let uniquePeople = [...new Map(people.map(obj => [obj.id, obj])).values()];
    console.log(uniquePeople); // Output: [{ id: 1 }, { id: 2 }]
    ```

### Combined Use Cases

26. **Using Map and Set Together**:
    ```javascript
    let map = new Map();
    map.set('set1', new Set([1, 2, 3]));
    map.set('set2', new Set([3, 4, 5]));

    for (let [key, set] of map) {
        console.log(`${key}: ${[...set]}`);
    }
    // Output:


    // set1: 1,2,3
    // set2: 3,4,5
    ```

27. **Map with Default Values**:
    ```javascript
    let defaultMap = new Map([['key1', 'value1']]);
    let defaultValue = defaultMap.get('key2') || 'default value';
    console.log(defaultValue); // Output: default value
    ```

28. **Using Sets for Mathematical Operations**:
    ```javascript
    let setA = new Set([1, 2, 3, 4]);
    let setB = new Set([3, 4, 5, 6]);

    let union = new Set([...setA, ...setB]); // {1, 2, 3, 4, 5, 6}
    let intersection = new Set([...setA].filter(x => setB.has(x))); // {3, 4}
    let difference = new Set([...setA].filter(x => !setB.has(x))); // {1, 2}

    console.log(union, intersection, difference);
    ```

29. **Complex Key in Map**:
    ```javascript
    let complexMap = new Map();
    let keyObj = { a: 1 };
    let keyArr = [1, 2, 3];

    complexMap.set(keyObj, 'object value');
    complexMap.set(keyArr, 'array value');

    console.log(complexMap.get(keyObj)); // Output: object value
    console.log(complexMap.get(keyArr)); // Output: array value
    ```

30. **Using Sets for Unique Strings**:
    ```javascript
    let words = 'hello world hello universe';
    let uniqueWords = new Set(words.split(' '));
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
    mixedMap.set(1, 'Number');
    mixedMap.set('1', 'String');
    mixedMap.set(true, 'Boolean');

    console.log(mixedMap.get(1)); // Output: Number
    console.log(mixedMap.get('1')); // Output: String
    console.log(mixedMap.get(true)); // Output: Boolean
    ```

33. **Sets and Maps with JSON Objects**:
    ```javascript
    let jsonMap = new Map();
    let jsonObject = { id: 1, name: 'John' };
    jsonMap.set(JSON.stringify(jsonObject), 'JSON Value');

    console.log(jsonMap.get(JSON.stringify({ id: 1, name: 'John' }))); // Output: JSON Value
    ```

34. **Counting Occurrences with Map**:
    ```javascript
    let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    let fruitCount = new Map();

    fruits.forEach(fruit => {
        fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);
    });

    console.log(fruitCount); // Output: Map { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
    ```

35. **Sets with Symbol Data Type**:
    ```javascript
    let sym1 = Symbol('id');
    let sym2 = Symbol('id');

    let symbolSet = new Set();
    symbolSet.add(sym1);
    symbolSet.add(sym2);

    console.log(symbolSet.size); // Output: 2 (since symbols are unique)
    ```

### ES6 Set and Map Edge Cases

36. **Map with Infinity as Key**:
    ```javascript
    let map = new Map();
    map.set(Infinity, 'Infinite Value');
    console.log(map.get(Infinity)); // Output: Infinite Value
    ```

37. **Set with undefined and null**:
    ```javascript
    let set = new Set([undefined, null]);
    console.log(set); // Output: Set { undefined, null }
    ```

38. **Using Map in JSON Serialization**:
    ```javascript
    let map = new Map([['name', 'Alice'], ['age', 25]]);
    let json = JSON.stringify(Array.from(map));
    console.log(json); // Output: [["name","Alice"],["age",25]]
    ```

39. **Map with Function Values**:
    ```javascript
    let map = new Map();
    map.set('sayHello', () => 'Hello!');
    console.log(map.get('sayHello')()); // Output: Hello!
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
    let map1 = new Map([['a', 1], ['b', 2]]);
    let map2 = new Map([['c', 3], ['d', 4]]);
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
    console.log(getData('user1')); // Output: Data for user1
    ```

### Sets and Maps in Real-World Scenarios

46. **Tracking Online Users with Set**:
    ```javascript
    let onlineUsers = new Set();
    onlineUsers.add('user1');
    onlineUsers.add('user2');
    onlineUsers.delete('user1');

    console.log(onlineUsers); // Output: Set { 'user2' }
    ```

47. **Using Map for Configuration Settings**:
    ```javascript
    let config = new Map();
    config.set('theme', 'dark');
    config.set('version', '1.2.0');

    console.log(config.get('theme')); // Output: dark
    ```

48. **Set to Handle Unique Email Addresses**:
    ```javascript
    let emails = new Set(['test@example.com', 'user@example.com', 'test@example.com']);
    console.log(emails); // Output: Set { 'test@example.com', 'user@example.com' }
    ```

49. **Map to Count Word Frequencies**:
    ```javascript
    let text = 'hello world hello';
    let words = text.split(' ');
    let wordMap = new Map();

    words.forEach(word => {
        wordMap.set(word, (wordMap.get(word) || 0) + 1);
    });

    console.log(wordMap); // Output: Map { 'hello' => 2, 'world' => 1 }
    ```

50. **Sets and Maps for Handling Unique Identifiers**:
    ```javascript
    let uniqueIDs = new Set();
    let idMap = new Map();

    let ids = [101, 102, 103, 101, 102];
    ids.forEach(id => {
        uniqueIDs.add(id);
        idMap.set(id, (idMap.get(id) || 0) + 1);
    });

    console.log(uniqueIDs); // Output: Set { 101, 102, 103 }
    console.log(idMap); // Output: Map { 101 => 2, 102 => 2, 103 => 1 }
    ```

These examples demonstrate

 various ways `Map` and `Set` can be used in JavaScript, from simple key-value storage and unique value collections to more advanced operations like filtering, counting, and managing complex data structures.