// Topic 1 : Type Coercion and == vs ===

// Implicit Type Coercion

console.log(5 + "5"); // "55" (number coerced to string)
console.log("5" - 1); // 4 (string coerced to number)
console.log(true + 1); // 2 (true coerced to 1)

// Explicit Type Coercion
console.log(Number("123")); // 123 (string to number)
console.log(String(123));   // "123" (number to string)
console.log(Boolean(0));    // false (0 is falsy)

//------------------------------------------------------------------------------------

// == vs ===
console.log(5 == "5");  // true (string coerced to number)
console.log(5 === "5"); // false (different types)

console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log(true == 1);  // true
console.log(true === 1); // false

console.log(0 == false); // true
console.log(0 === false); // false




