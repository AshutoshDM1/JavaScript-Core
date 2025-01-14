// DataTypes In javascript

// Primitive Data Types
// Non Primitive Data Types

// Topic 1 : Copying a variable

let a = 5;
let b = a;
b = 10;  
// Here the value of a is not changed because the value of a is stored in the stack memory and the value of b is stored in the heap memory
console.log(a);  // 5


let obj1 = {name : "ashu"}
let obj2 = obj1
obj2.name = "john" 
// Here the value of obj1 will also get Changed because the value of obj1 is stored in the heap memory and the value of obj2 is stored in the heap memory
console.log(obj1.name);  // john

console.log(typeof 42);          // number
console.log(typeof "Hello");     // string
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof []);          // object
console.log(typeof {});          // object









