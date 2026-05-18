// control flows or conditionals
let condition = true;

if (condition) {
    console.log(condition);
}

// if else statement

if (condition) {
    console.log("hello world");
} else {
    console.log("good night world");
}


condition = false;

// else if statement

if (condition) {
    console.log("good afternoon");
} else if (!condition) {
    console.log("good evening");

} else if (condition === false) {
    console.log("good night");

} else {
    console.log("good morning");
}



let age = 17;
let arg = 15
if (age > arg) {
    console.log(`age is greater ${arg}`);
} else {
    console.log(`age is not greater ${arg}`);

}


switch (true) {
    case age > 25:
        console.log(`age is greater than 25 `);
        break;

    case age > 17:
        console.log(`age is greater than 17`);
        break;

    case age > 16:
        console.log(`age is greater than 16`);
        break;
    default:
        console.log("age is less than all");
}