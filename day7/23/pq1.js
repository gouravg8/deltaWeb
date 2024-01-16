// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
const diceRoll = () => Math.floor(Math.random() * 6 + 1);
console.log(diceRoll());

// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
const Car = {
  name: "Porche",
  model: "htx",
  color: "orange",
};
// Print the car’s name.
console.log(Car.name);
// Qs3. Create an object Person with their name, age and city.
const Person = {
  name: "Gourav soni",
  age: 21,
  city: "New Delhi",
};
// Edit their city’s original value to change it to “New York”.
Person.city = "New York";
// Add a new property country and set it to the United States.
Person.country = "United states";
const {name, age, city, country} = Person;
console.log(name, age, city, country);