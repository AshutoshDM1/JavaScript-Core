// 3. Functional Programming

// Pure Functions

// Immutability

// Map, Filter, Reduce


function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Output: 5


let total = 0;

function addToTotal(value) {
  total += value; // Modifies an external variable (side effect)
}

addToTotal(5);
console.log(total); // Output: 5


const person = { name: "Alice", age: 25 };
person.age = 26; // Modifies the original object
console.log(person); // Output: { name: "Alice", age: 26 }



const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, age: 26 }; // Creates a new object
console.log(updatedPerson); // Output: { name: "Alice", age: 26 }
console.log(person); // Output: { name: "Alice", age: 25 }



array.map(callback(currentValue, index, array));


const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num * num);
console.log(squares); // Output: [1, 4, 9, 16]

