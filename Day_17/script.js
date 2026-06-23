var arr=[10,20,30,40,50];
arr.reverse();
console.log(arr);

//gec=global execution context has 2 phases : 1-memory creation phase 2-code execution phase
// memory creation phase: in this phase js engine creates memory for all the variables and functions and assigns undefined to all the variables and functions
// code execution phase: in this phase js engine executes the code line by line and assigns the actual values to the variables and functions
//stack : lifo(last in first out) data structure
//queue : fifo(first in first out) data structure
//call stack : it is a stack data structure which stores the function calls in the order they are called and executes them in the reverse order
// in callstack first gec is created and then the function calls are pushed into the stack and when the function execution is completed it is popped out of the stack

console.log(b);//return undefined because in memory creation phase js engine creates memory for all the variables and functions and assigns undefined to all the variables and functions
var b=10;//undefined defauult value

//temporary dead zone : it is the time period between the memory creation phase and code execution phase in which the variables are in the temporary dead zone and cannot be accessed

//lexical scoping : it is the process of determining the scope of a variable based on its location in the source code. In lexical scoping, 
// the scope of a variable is determined by its position in the source code and nested functions have access to variables declared in their outer scope.

//closure : it is a function that has access to the parent scope even after the parent function has closed 
//closure is created when a function is defined inside another function and the inner function has access to the variables of the outer function even after the outer function has returned

//scope chain : it is the chain of scopes that are created when a function is called. When a function is called, a new scope is created and it has access to the variables of its parent scope and so on until the global scope is reached.