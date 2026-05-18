const btn = document.querySelector("button");
const leftSide = document.querySelector("#left-side");

let state = false;

// btn.addEventListener("click", (e) => {

//     if (state) {
//         leftSide.style.display = "block";
//         state = false;
//     } else {
//         leftSide.style.display = "none";
//         state = true;

//     }

// });


btn.addEventListener("click", (e) => {
    leftSide.classList.toggle("hidden");
});
