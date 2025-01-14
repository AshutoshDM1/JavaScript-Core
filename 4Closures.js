// Topic 1 : Closures


function outer() {
    let count = 0; // Variable in outer scope
  
    function inner() {
      count++; // Accessing outer scope variable
      console.log(count);
    }
  
    return inner;
  }
  
  const counter = outer(); // `counter` now holds the `inner` function with its closure
  counter(); // 1
  counter(); // 2
  counter(); // 3
  
  //------------------------------------------------------------------------------------

  // Data Encapsulation: Closures help in creating private variables.
  function createCounter() {
    let count = 0; // private variable
  
    return {
      increment() {
        count++;
        console.log(count);
      },
      decrement() {
        count--;
        console.log(count);
      },
    };
  }
  
  const counter2 = createCounter();
  counter2.increment(); // 1 
  counter2.increment(); // 2
  counter2.decrement(); // 1
  
  //------------------------------------------------------------------------------------

  // Module Pattern: Closures are used to create modules with private data.
  const module = (function() {
    let privateVar = "I'm private!";
    function privateMethod() {
      console.log(privateVar);
    }
    return {
      publicMethod: privateMethod
    };
  })();         

  module.publicMethod(); // "I'm private!"


  //------------------------------------------------------------------------------------

// Function Factories: Closures are used to create functions with specific configurations.

function multiplier(factor) {
    return function (num) {
      return num * factor;
    };
  }
  
  const double = multiplier(2); 
  console.log(double(5)); // 10
  
  const triple = multiplier(3);
  console.log(triple(5)); // 15
  

  //------------------------------------------------------------------------------------

  // Counter Example: Each call to `outer` creates a new closure.
  function outer() {
    let count = 0;
  
    return function () {
      count++;
      console.log(count);
    };
  }
  
  const counter3 = outer();
  const counter4 = outer();
  
  counter3(); // ?1
  counter3(); // ?2
  counter4(); // ?1 counter3 is not affected by counter4
  
  //------------------------------------------------------------------------------------

// Example 2 : Coding my self

function main() {
  let count = 0;
  return function notmain() {
    count++;
    console.log(count);
  }
}

const counter5 = main();
counter5(); // 1
counter5(); // 2




