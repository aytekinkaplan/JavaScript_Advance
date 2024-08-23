// Use of for ... in

const country = {
  name: "USA",
  capital: "Washington, D.C.",
  language: "English",
  population: 328_200_000,
  neighbours: ["Canada", "Mexico"],
  flag: "🇺🇸",
  description: "A country in North America",

  getPopulation() {
    return `${this.name} has a population of ${this.population}`;
  },

  getNeighbours() {
    return `${this.name} has ${
      this.neighbours.length
    } neighbouring countries: ${this.neighbours.join(", ")}`;
  },

  getFlag() {
    return this.flag;
  },

  getDescription() {
    return this.description;
  },

  getDetails() {
    return `${this.getPopulation()}, ${this.getNeighbours()}, ${this.getFlag()}, ${this.getDescription()}`;
  },
};

console.log(country.getDetails());

// Output: USA has a population of 328,200,000, Canada, Mexico

// This example uses `for...in` to iterate over an object's properties. `for...in` is a statement that iterates over all enumerable properties of an object.

// Note: The `getDetails` method is not enumerable.

for (let property in country) {
  console.log(`${property}: ${country[property]}`);
}

// Output:
// name: USA
// capital: Washington, D.C.
//     language: English
// population: 328200000
// neighbours: Canada,Mexico
// flag: 🇺🇸
// description: A country in North America
// getPopulation: function () { return `${this.name} has a population of ${this.population}`; }
// getNeighbours: function () { return `${this.name} has ${this.neighbours.length} neighbouring countries: ${this.neighbours.join(", ")}`; }
// getFlag: function () { return this.flag; }
// getDescription: function () { return this.description; }
// getDetails: function () { return `${this.getPopulation()}, ${this.getNeighbours()}, ${this.getFlag()}, ${this.getDescription()}`; }
