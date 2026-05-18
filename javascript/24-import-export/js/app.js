import allUsers, { createUser } from "./users.js";
// import  from "./users.js";
import { add, subtract } from "./utilities.js";

async function displayUsers(params) {
    try {
        const data = await allUsers();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

displayUsers();

let result = add(2, 2);
console.log(result);

