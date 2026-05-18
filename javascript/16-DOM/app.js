// select all instance of a node in js u use querySelectorAll
const metas = document.querySelectorAll("meta");


// get element by id
const parent = document.getElementById("parent");



// select element by class name
// document.getElementsByClassName("className");

// // selecting by tag name
// document.getElementsByTagName("tagName");

// // selecting by element name
// document.getElementsByName("elementName");

const newParagraph = document.createElement("p");
newParagraph.textContent = "Hi I am the new man";

parent.appendChild(newParagraph);

document.querySelector("body").appendChild(newParagraph);


// removing elements
parent.removeChild(parent.querySelector("h2"));

parent.remove();