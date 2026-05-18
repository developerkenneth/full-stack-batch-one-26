const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const btn = document.querySelector("button");

parent.addEventListener("click", (e) => {
        child.style.display = "none";
});
btn.addEventListener("click", (e) => {
        e.stopPropagation();

        child.style.display = "block";
});

// naming convention
// actual word : background color
// background-color ---css
// backgroundColor