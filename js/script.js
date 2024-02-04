{
    const welcome = () => {
        console.log("Cześć! Witam wszystkich deweloperów");
    };

    const toggleBackgraund = () => {
        const header = document.querySelector(".js-header");
        const text = document.querySelector(".js-text");

        header.classList.toggle("dark");
        text.innerText = header.classList.contains("dark") ? "Wyłącz" : "Włącz";
    };
    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackgraund);

        welcome();
    };

    init();
}

