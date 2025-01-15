// Scope and Execution Contexts

// What is Scope?
// Scope determines where variables, functions, and objects are accessible in your code.

// Scope : where a variable is accessible

// 1. Global Scope : accessible everywhere
// 2. Local Scope : accessible only in a function
// 3. Block Scope : accessible only in a block

// Example 1 : Global Scope
let a = 10; // Global variable
function show() {
  console.log(a); // Accessible
}
show(); // 10

// Example 2 : Local Scope  
function greet() {
    let message = "Hello!";
    console.log(message); // Accessible inside the function
}

greet();
console.log(message); // Error: message is not defined

// Example 3 : Block Scope
{
let x = 5;
const y = 10;
console.log(x, y); // Accessible
}
console.log(x, y); // Error: Not accessible

// What is an Execution Context?
// An Execution Context is the environment in which JavaScript code is executed. There are three main types of Execution Contexts:

// 1. Global Execution Context : the default context for all code that is not inside a function or block.
// 2. Function Execution Context : the context for code inside a function.
// 3. Eval Execution Context : the context for code inside an eval function.


// phase 1 : creation phase
// phase 2 : execution phase

/* 
1. Creation Phase:
- Variables are hoisted.
- var is initialized to undefined; let and const are uninitialized (temporal dead zone).
- Function declarations are fully hoisted.

2. Execution Phase:
- Code is executed line by line.
- Variables are assigned values.
*/

let a1 = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a1, b, c); // Accesses variables from all scopes
  }

  inner();
}

outer();


/* 
Scope Chain
- When a variable is accessed, JavaScript looks for it in the current scope. If not found, it moves to the parent scope, continuing until it reaches the global scope or throws a ReferenceError.`
*/

let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";
    console.log(globalVar); // Global
    console.log(outerVar);  // Outer
    console.log(innerVar);  // Inner
  }

  inner();
}

outer();


// Example 4 : Hoisting


let x = 10;

function foo() {
  console.log(x); // undefined
  let x = 20;
}

foo();


let a2 = 1;

function first() {
  let b = 2;    

  function second() {
    let c = 3;
    console.log(a2, b, c); // 1 2 3
  }

  second();
}

first();

