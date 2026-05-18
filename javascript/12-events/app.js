// js selector:
// query selector . #

// const btn = document.querySelector("button");
// btn.addEventListener("click", (event) =>{
//         console.log(event.currentTarget);
// });


// const name = document.querySelector("#name");

// name.addEventListener("change", function(e){
//         console.log(e.currentTarget.value);
// });


const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
        event.preventDefault();
        const numbOne = document.querySelector("#number-one").value;
        const numbTwo = document.querySelector("#number-two").value;
        const operator = document.querySelector("#arith").value;
        let result;
        if (operator === "+") {
                result = parseInt(numbOne) + parseInt(numbTwo);
        } else if (operator === "-") {
                result = parseInt(numbOne) - parseInt(numbTwo);

        } else if (operator === "/") {
                result = parseInt(numbOne) / parseInt(numbTwo);

                // substraction
        } else if (operator === "*") {
                result = parseInt(numbOne) * parseInt(numbTwo);

        }

        const displayResult = document.querySelector("#result");
        displayResult.textContent = result;

})