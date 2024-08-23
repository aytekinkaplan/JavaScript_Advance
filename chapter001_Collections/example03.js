// Add elements to a Map
const us_states = new Map();
us_states.set("AL", "Alabama");
us_states.set("AK", "Alaska");
us_states.set("AZ", "Arizona");
us_states.set("AR", "Arkansas");
us_states.set("CA", "California");
us_states.set("CO", "Colorado");
us_states.set("CT", "Connecticut");
us_states.set("DE", "Delaware");
us_states.set("FL", "Florida");
us_states.set("GA", "Georgia");
us_states.set("HI", "Hawaii");
us_states.set("ID", "Idaho");
us_states.set("IL", "Illinois");

console.log(us_states);
// Output: Map { 'AL' => 'Alabama', 'AK' => 'Alaska', ... }

console.log(us_states.get("AL"));
// Output: Alabama

console.log(us_states.size);
// Output: 13

console.log(us_states.has("AL"));
// Output: true

console.log(us_states.has("HI"));
// Output: true

us_states.delete("AL");
console.log(us_states.has("AL"));
// Output: false

console.log(us_states.size);
// Output: 12

console.log(us_states);
// Output: Map { 'AK' => 'Alaska', 'AZ' => 'Arizona', ... }

// Add elements to a Map
us_states.set("ID", "Idaho");
us_states.set("IL", "Illinois");
us_states.set("IN", "Indiana");
us_states.set("IA", "Iowa");
us_states.set("KS", "Kansas");
us_states.set("KY", "Kentucky");
us_states.set("LA", "Louisiana");

console.log(us_states);
// Output: Map { 'AK' => 'Alaska', 'AZ' => 'Arizona', ... }

console.log(us_states.size);
// Output: 17
