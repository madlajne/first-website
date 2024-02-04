console.log("Cześć! Witam wszystkich deweloperów");


let header = document.querySelector(".js-header");
let button = document.querySelector(".js-button");
let text = document.querySelector(".js-text");


button.addEventListener("click", () => {
    header.classList.toggle("dark");
    text.innerText = header.classList.contains("dark") ? "Wyłącz" : "Włącz";
});
