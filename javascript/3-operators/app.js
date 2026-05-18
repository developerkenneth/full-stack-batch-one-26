// arithmetic operators

// examples are : addition, multiplation, substraction etc


let result ;

// addition
result = 2 + 2 ;

// subtraction
result = 9 - 4;

// division 
result = 8 / 4;


// multiplication 
result = 6 * 3;

// division 
result = 8 % 5;

// exponent  
result = 5**3 ;


//assignment operators
// examples of asignment operators : equal to, plus equal to etc

result = 10;

// plus equal to
result+=40;

// minus equal to
result-=30;

// multiply equal to
result*=2;

// divide equal to
result/=5;

// minus equal to
result%=3;

// comparison operators

// compares characters
result = 34 == "34";


// compares characters & datatypes
result = 34 === "34";

// less than or equal too
result = 25 <= 25 ;

// less than
result = 26 < 26;

// this applies to greater as well

// logical operators: and , or 

// and operator

result = 13 < 18 && 20 < 35; // return true

result = 13 > 18 && 20 < 35; // return false

// or operator

result = 13 > 18 || 20 < 35; // return false

const inputOne = parseInt(prompt("enter input one"));
const inputTwo = parseInt(prompt("enter input two"));

// console.log(parseInt(inputOne), parseInt(inputTwo))
result = inputOne + inputTwo;
console.log(result);

result = inputOne - inputTwo;
console.log(result);

result = inputOne % inputTwo;
console.log(result);