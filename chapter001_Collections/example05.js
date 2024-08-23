const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function cleanArray(arr) {
  let map = new Map();

  for (let value of arr) {
    let key = value.toLowerCase().split("").sort().join("");
    map.set(key, value);
  }

  return Array.from(map.values());
}

console.log(cleanArray(arr));
