console.log("Cześć! Witam wszystkich deweloperów");

let header = document.querySelector(".header");
let button = document.querySelector(".button");
let text = document.querySelector(".text");


button.addEventListener("click", () => {
    header.classList.toggle("dark");

    text.innerText = header.classList.contains("dark") ? "Wyłącz" : "Włącz";
});
