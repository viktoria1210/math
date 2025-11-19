let xut = document.querySelector("#xit");
let link = document.querySelector(".link"); // <-- СЛУХАЄМО правильний елемент

link.addEventListener("click", function(e) {

    e.preventDefault(); // щоб не скидало сторінку

    if (xut.value.trim().toLowerCase() === "так") {
        href = "https://viktoria1210.github.io/maths/";
    } else {
        alert("Напиши: так");
    }
});
