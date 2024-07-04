    let modal = document.getElementById("modal");
let openButton = document.getElementById("open");
let closeButton = document.getElementById("close");

// Функція для відкриття модального вікна
openButton.addEventListener("click", () => {
    modal.style.display = "block";
});

// Функція для закриття модального вікна
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закриття модального вікна при натисканні за межами контенту
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});