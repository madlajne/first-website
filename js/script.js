console.log("Cześć! Witam wszystkich deweloperów");


let header = document.querySelector(".header");
let header__button = document.querySelector(".header__button");
let text = document.querySelector(".text");


header__button.addEventListener("click", () => {
    header.classList.toggle("dark");
    text.innerText = header.classList.contains("dark") ? "Wyłącz" : "Włącz";
});
