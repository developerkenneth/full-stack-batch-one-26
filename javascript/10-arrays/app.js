// arrays

const people = ['Vitus', 'Samuel', 'Gabriel'];
const items = ['juice', 'gala', 'water', 'bread'];
const booleans = [true, false, NaN, undefined];

const jobs = Array('cleaner', 'house helps', 'gateman');
// console.log(items, jobs, typeof items);

// accessing array element;
// getting samuel
// console.log(people[1]); //samuel
// console.log(items[2]); // wwater
// console.log(jobs[0]); //cleaner 

// adding array element
people[3] = "Tochi";
const nextElement = people.length;
people[nextElement] = "Uche";

// push adds a new element to the end of the array
// unshift adds a new element to the begining of the array

people.push("Kosi");
people.unshift("Kosi");

// removing array elements
// pop  removes element at the end of the array
// shift removes element at the begining of the array
people.pop();
people.shift();

console.log(people);

const peopleAsStrings = people.join("...");
let result;

// joining two arrays together
result = people.concat(items);

// returns the index of an array element if found else returns false
result = people.indexOf("Tochi");

// return true or false if element is found
result = people.includes("amaka");

// return a sub array from an array
result = people.slice(0, 3);

// for of  loop

for (const person of people) {
    console.log(person);
}

// array loops or high order array methods
const peopleWithA = people.map((person, index) => {
    return `${person} A${index + 1}`;
});


result = peopleWithA.filter((person) => {
    return person.includes("i");
});
result = "";
peopleWithA.forEach((person, index)=>{
        result+= person.includes("i") ? person : "";
});


console.log(result);
