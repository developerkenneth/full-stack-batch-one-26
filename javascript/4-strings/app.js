const stringOne = "Hello world";
const stringTwo = 'My name is Kenneth';


// template string
const stringThree = `${stringOne} ${stringTwo} I am a web developer`;

// concatination
const fullString = stringOne + " " + stringTwo;

let result ;

// upperCase function
result = stringOne.toUpperCase();

// lowecase method
result = stringTwo.toLowerCase();

// length
result = stringOne.length;


// index of
result = stringOne.indexOf("world");
// this returns false if string does not exisr


// includes method
result = stringThree.includes("Kenneth");


// replace and replce all methods

result = stringThree.replace("Kenneth", "John");


result = stringThree.replaceAll("l", "y");


// slice methods create a sub string from a string
result = stringThree.slice(0, 30);

console.log(result);

