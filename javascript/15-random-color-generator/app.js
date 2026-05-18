const grid = document.querySelector(".grid");

const random = (number) => {
    return Math.round(Math.random() * number);
}
grid.addEventListener("mouseover", (e) => {

    if (e.target.classList.toString().includes("grid-item")) {
        e.target.style.backgroundColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    }
    return;
});
