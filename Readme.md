# JavaScript Interview Questions

# Event Loop in JavaScript

## What is the Event Loop?
The Event Loop is a mechanism in JavaScript that handles asynchronous operations and ensures non-blocking execution in a single-threaded environment. It continuously monitors the Call Stack and Task Queue to determine what should be executed next.

## Key Components

### 1. Call Stack
- A stack data structure where function calls are added and removed.
- Executes one function at a time (LIFO - Last In, First Out).

### 2. Web APIs
- Provided by the browser (or Node.js) for handling asynchronous operations like `setTimeout`, `fetch`, and DOM events.
- Once completed, the callback is sent to the Task Queue.

### 3. Task Queue (Callback Queue)
- A queue where completed asynchronous callbacks wait to be executed.
- Includes tasks like `setTimeout`, DOM events, and AJAX callbacks.

### 4. Microtask Queue
- Contains higher-priority tasks like Promises and MutationObserver.
- Always executed before the Task Queue.

## How the Event Loop Works
1. The Call Stack is empty.
2. The Event Loop checks the Call Stack and Task Queue.
3. If the Call Stack is empty, it moves the first item from the Task Queue to the Call Stack.
4. If the Call Stack is not empty, it waits for the Call Stack to be empty.

## Example: Event Loop in Action


