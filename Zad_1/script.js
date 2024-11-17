const text = document.getElementById("text");
const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
});
