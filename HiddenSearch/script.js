const inputEl = document.querySelector(".input");
const buttonEl = document.querySelector(".btn");
const search = document.querySelector(".search");

buttonEl.addEventListener("click", () => {
    search.classList.toggle("active");
    inputEl.focus();
});