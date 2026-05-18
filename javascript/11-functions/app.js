// two kinds of function in js

// traditional function

// creating a function
// function add (numbOne, numbTwo){
      
//    return numbOne + numbTwo;
// }


// returning multiple datas

function add (numbOne, numbTwo){
      const result = numbOne + numbTwo;

   return {result : result, numbOne : numbOne, numbTwo : numbTwo} ;
}


// using functions
const solutionOne = add(20, 10);
const solutionTwo = add(60, 26);
const solutionThree = add(19, 11);

console.log(solutionOne);


// arrow function
const subtract = (numbOne, numbTwo)=>{
        return numbOne - numbTwo;
}


// using arrow functions
let result = subtract(78, 45);
console.log(result);


// anonymous function
// is a function without a name and can only be used once
()=>{
        console.log("hello world");
}