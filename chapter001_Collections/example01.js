let map = new Map();
map.set("color", "blue");
map.set("size", "medium");

console.log(map); // Output: Map { "color" => "blue", "size" => "medium" }

console.log(map.get("color")); // Output: blue

console.log(map.get("size")); // Output: "medium"

console.log(map.size); // Output: 2

console.log(map.has("color")); // Output: true

console.log(map.has("size")); // Output: true

map.delete("color");
console.log(map.has("color")); // Output: false

console.log(map.size); // Output: 1

console.log(map); // Output: Map { "size" => "medium" }
