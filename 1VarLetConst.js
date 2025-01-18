// Var, Let, Const 

// Topic 1 : Declaration

// if (true ) {
//     var a = 5; 
//     // var is hoisted to the top of the function scope and can be accessed outside the block
//     let b = 10; 
//     // let is hoisted to the top of the block scope and can be accessed outside the block
//     const c = 15;
//     // Const can't be accessed outside the block scope
// }

// console.log(a);
// console.log(b);
// console.log(c);

// Topic 2 : Re-declaration

var name = "Alice";
var age = 25;
if (true) {
  var name = "Bob"; // Should not redeclare
  var age = 30; // Should not redeclare
}
console.log(name); // ?Bob
console.log(age);  // ?30

// Topic 3 : Hoisting

// 1. Variables declared with var are hoisted but initialized to undefined.
// 2. Variables declared with let and const are hoisted but are placed in a "temporal dead zone" (you can’t use them until their declaration is encountered).
// 3. Function declarations are fully hoisted (available to use before declaration).
// 4. Function expressions and arrow functions are treated like variables (not hoisted).       

// Var

console.log(Num1); // undefined
Num1 = 10  // can be used before declaration beacuse of var
console.log(Num1); // 10
var Num1 = 5;
console.log(Num1); // 5
// Let

Num2 = 10  // Error: can't be used before declaration beacuse of let this is in temporal dead zone
console.log(Num2);
let Num2 = 5;

// Const 

// same as let but can't be re-declared

// Function

foo(); // Works! Outputs: "Hello"
function foo() {
  console.log("Hello");
}

// In function expression and arrow function we can't use before declaration

bar(); // TypeError: bar is not a function // same with arrow function
var bar = function () {
  console.log("Hello");
};

// Example 2
console.log(x); // ?undefined
var x = 10;

console.log(y); // ?ReferenceError: y is not defined temporal dead zone
let y = 20;

hello(); // ?Hi!
function hello() {
  console.log("Hi!");
}