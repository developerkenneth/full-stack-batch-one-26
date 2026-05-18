
// runs a particular code after a given amount of time
setTimeout(()=>{
    console.log(10);
}, 1000 * 10);

let i = 0;

function convert (numb){
    return numb * 1000;
}
const interval = setInterval(()=>{
        console.log(i);
        i++;

        if(i == 10) clearInterval(interval);

}, convert(5));


const hour = document.querySelector("#hour");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

setInterval(()=>{
    const date = new Date();
    hour.textContent = date.getHours();
    minutes.textContent = date.getMinutes();
    seconds.textContent = date.getSeconds();

}, convert(1));
const date = new Date();
console.log(date.getSeconds());
console.log(date.getHours());
console.log(date.getMinutes());