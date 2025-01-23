console.log(this); // Window (global object in browsers)

function show() {
  console.log(this);
}

show(); // Window (or undefined in strict mode)


const person = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};

person.greet(); // Alice


function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello"); // Hello, Alice
greet.apply(person, ["Hi"]); // Hi, Alice

const boundGreet = greet.bind(person);
boundGreet("Hey"); // Hey, Alice

const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // undefined (inherits from global scope)
  },
};

obj.greet();

const obj2 = {
  name: "Bob",
  greet() {
    const arrow = () => console.log(this.name);
    arrow(); // Bob
  },
};

obj2.greet();





