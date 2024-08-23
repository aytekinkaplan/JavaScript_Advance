// Set Examples
const us_states = new Set();

us_states.add({AL: "Alabama"});
us_states.add({AK: "Alaska"});
us_states.add({AZ: "Arizona"});
us_states.add({AR: "Arkansas"});
us_states.add({CA: "California"});
us_states.add({CO: "Colorado"});
us_states.add({CT: "Connecticut"});
us_states.add({DE: "Delaware"});
us_states.add({FL: "Florida"});
us_states.add({GA: "Georgia"});
us_states.add({HI: "Hawaii"});
us_states.add({ID: "Idaho"});
us_states.add({IL: "Illinois"});
us_states.add({IN: "Indiana"});
us_states.add({IA: "Iowa"});
us_states.add({KS: "Kansas"});
us_states.add({KY: "Kentucky"});
us_states.add({LA: "Louisiana"});
us_states.add({ME: "Maine"});
us_states.add({MD: "Maryland"});
us_states.add({MA: "Massachusetts"});
us_states.add({MI: "Michigan"});
us_states.add({MN: "Minnesota"});
us_states.add({MS: "Mississippi"});
us_states.add({MO: "Missouri"});
us_states.add({MT: "Montana"});
us_states.add({NE: "Nebraska"});
us_states.add({NV: "Nevada"});
us_states.add({NH: "New Hampshire"});
us_states.add({NJ: "New Jersey"});
us_states.add({NM: "New Mexico"});
us_states.add({NY: "New York"});
us_states.add({NC: "North Carolina"});
us_states.add({ND: "North Dakota"});
us_states.add({OH: "Ohio"});
us_states.add({OK: "Oklahoma"});
us_states.add({OR: "Oregon"});
us_states.add({PA: "Pennsylvania"});
us_states.add({RI: "Rhode Island"});
us_states.add({SC: "South Carolina"});
us_states.add({SD: "South Dakota"});
us_states.add({TN: "Tennessee"});
us_states.add({TX: "Texas"});
us_states.add({UT: "Utah"});
us_states.add({VT: "Vermont"});
us_states.add({VA: "Virginia"});
us_states.add({WA: "Washington"});
us_states.add({WV: "West Virginia"});
us_states.add({WI: "Wisconsin"});
us_states.add({WY: "Wyoming"});
console.log(us_states);

// Output: Set { {AL: 'Alabama'}, {AK: 'Alaska'}, {AZ: 'Arizona'}, ... }

// Iteration over Sets
for (let state of us_states) {
    console.log(state);
}
// Output: {AL: 'Alabama'}
// {AK: 'Alaska'}
// {AZ: 'Arizona'}
// {...}


