const password = document.getElementById("password");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const special = document.getElementById("special");

password.addEventListener("input", () => {
    const value = password.value;

    length.style.color = value.length >= 8 ? "green" : "red";
    uppercase.style.color = /[A-Z]/.test(value) ? "green" : "red";
    lowercase.style.color = /[a-z]/.test(value) ? "green" : "red";
    special.style.color = /[!@#]/.test(value) ? "green" : "red";
});
