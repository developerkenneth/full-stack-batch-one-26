const accordians = document.querySelectorAll(".header");

const handleClick = (e) => {

    const parentNode = e.currentTarget.parentNode;

    //    get image element
    const image = e.currentTarget.querySelector("img");

    const body = parentNode.querySelector(".body");

    body.classList.toggle("active");
    const classList = body.classList.toString();

    if (classList.includes("active")) {
        image.setAttribute("src", "minus.svg");

    } else{
        image.setAttribute("src", "plus.svg");
        // change of image
        state = false;
    }

}
accordians.forEach((accordian) => accordian.addEventListener("click", handleClick));