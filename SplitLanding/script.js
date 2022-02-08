const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container")

left.addEventListener("mouseenter", () => container.classList.add("hover-left"));
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"));

right.addEventListener("mouseenter", rightEnter);
right.addEventListener("mouseleave", rightLeave);

function rightEnter() {
    container.classList.add("hover-right");
}

function rightLeave() {
    container.classList.remove("hover-right");
}