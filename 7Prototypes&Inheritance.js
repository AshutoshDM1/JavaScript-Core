/*
-- Prototypes and Prototypal Inheritance --
-What are Prototypes?
-In JavaScript, every object has an internal link to another object called its prototype.
-This prototype object can have its own prototype, creating a chain known as the prototype chain.
-The chain ends when an object has a null prototype.
*/


// 7. Prototypes and Prototypal Inheritance
// What are Prototypes?
// 1. In JavaScript, every object has an internal link to another object called its prototype.
// 2. This prototype object can have its own prototype, creating a chain known as the prototype chain.
// 3. The chain ends when an object has a null prototype.


// ### **7. Prototypes and Prototypal Inheritance**
//
// ---
//
// #### **What are Prototypes?**
// - In JavaScript, every object has an internal link to another object called its **prototype**.
// - This prototype object can have its own prototype, creating a chain known as the **prototype chain**.
// - The chain ends when an object has a `null` prototype.
//
// ---
//
// ### **Prototypal Inheritance**
// Prototypal Inheritance is a feature in JavaScript that allows an object to inherit properties and methods from another object via its prototype.
//
// ---
//
// ### **How Prototypes Work**
// 1. When you try to access a property or method on an object, JavaScript first looks for it in the object itself.
// 2. If the property or method is not found, it looks in the object's prototype.
// 3. This process continues up the prototype chain until the property is found or the chain ends.
//
// ---
//
// ### **Creating Prototypes**
// 1. **Using Constructor Functions**:
//    - A constructor function can define shared properties or methods in its prototype.
//    ```javascript
//    function Person(name) {
//      this.name = name;
//    }
//
//    Person.prototype.greet = function () {
//      console.log(`Hello, my name is ${this.name}`);
//    };
//
//    const alice = new Person("Alice");
//    alice.greet(); // Hello, my name is Alice
//    ```
//
// 2. **Using `Object.create()`**:
//    - You can create an object with a specific prototype.
//    ```javascript
//    const animal = {
//      speak() {
//        console.log("I make a sound");
//      },
//    };
//
//    const dog = Object.create(animal);
//    dog.speak(); // I make a sound
//    ```
//
// ---
//
// ### **Prototype Chain**
// Example of a prototype chain:
// ```javascript
// const obj = {};
// console.log(obj.__proto__); // Object.prototype
// console.log(obj.__proto__.__proto__); // null
// ```
//
// - `obj` → inherits from `Object.prototype` → inherits from `null`.
//
// ---
//
// ### **`__proto__` vs `prototype`**
// 1. **`__proto__`**:
//    - Refers to the prototype of an object.
//    - Deprecated but widely supported.
//
// 2. **`prototype`**:
//    - Used in constructor functions and classes to define methods that are inherited by instances.
//
// ---
//
// ### **ES6 Classes and Prototypes**
// Classes in JavaScript are syntactic sugar over prototype-based inheritance.
//
// ```javascript
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
//
// const bob = new Person("Bob");
// bob.greet(); // Hello, my name is Bob
// ```
//
// ---
//
// ### **Object Methods Related to Prototypes**
// 1. **`Object.create()`**:
//    - Creates a new object with the specified prototype.
//    ```javascript
//    const parent = { hello: "world" };
//    const child = Object.create(parent);
//    console.log(child.hello); // world
//    ```
//
// 2. **`Object.getPrototypeOf()`**:
//    - Returns the prototype of an object.
//    ```javascript
//    const obj = {};
//    console.log(Object.getPrototypeOf(obj)); // Object.prototype
//    ```
//
// 3. **`Object.setPrototypeOf()`**:
//    - Sets the prototype of an object.
//    ```javascript
//    const obj = {};
//    const proto = { greeting: "Hello" };
//    Object.setPrototypeOf(obj, proto);
//    console.log(obj.greeting); // Hello
//    ```
//
// ---
//
// ### Practical Example
// ```javascript
// function Animal(name) {
//   this.name = name;
// }
//
// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a sound`);
// };
//
// const dog = new Animal("Dog");
// dog.speak(); // Dog makes a sound
//
// const cat = new Animal("Cat");
// cat.speak(); // Cat makes a sound
// ```
//
// ---
//
// ### Task: Debug and Learn
// 1. Predict the output:
//    ```javascript
//    function Car(make) {
//      this.make = make;
//    }
//
//    Car.prototype.drive = function () {
//      console.log(`Driving a ${this.make}`);
//    };
//
//    const tesla = new Car("Tesla");
//    tesla.drive();
//
//    console.log(tesla.__proto__ === Car.prototype); // ?
//    console.log(Car.prototype.__proto__ === Object.prototype); // ?
//    ```
//
// 2. Modify a prototype:
   javascript
   const obj = {};
   Object.prototype.sayHello = function () {
     console.log("Hello from the prototype!");
   };

   obj.sayHello(); // ?
   
//
// ---
//
// Let me know when you're ready, and we'll move on to **`this` and Its Binding**! 😊
