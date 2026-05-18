// global scope
const myName = "kenneth";

// myName here can be accessed from anywhere

{
    // local scope
    const myName = "otis";

    // my name cannot be accessed outside the curly brace
    console.log(myName);
}

console.log(myName);