const modalEl = document.querySelector(".modal__wrapper");
const formEl = document.querySelector(".form");
const inputName = document.querySelector(".form__name");
const inputProfession = document.querySelector(".form__profession");
const password = document.querySelector(".password");
const contactBtn = document.querySelector(".contact__btn");
const wrapperEl = document.querySelector(".wrapper");

let users = JSON.parse(localStorage.getItem("users")) || [];

function showModal() {
    modalEl.style.display = "block";
}

function closeModal() {
    modalEl.style.display = "none";
}

function createUserCard(user) {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    cardEl.innerHTML = `
        <h3 class="user__name">${user.name}</h3>
        <p class="profession">${user.profession}</p>
        <p class="pasword">${user.password}</p>
        <button class="contact__btn">Contact</button>
    `;
    wrapperEl.appendChild(cardEl);
}

function renderUsers() {
    users.forEach(user => {
        createUserCard(user);
    });
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inputName.value.trim() || !inputProfession.value.trim() || !password.value.trim()) {
        return alert("Iltimos, barcha maydonlarni to'ldiring");
    }

    let newUser = {
        id: new Date().getTime(),
        name: inputName.value,
        profession: inputProfession.value,
        password: inputEducate.value,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    createUserCard(newUser);

    inputName.value = "";
    inputProfession.value = "";
    password.value = "";
    closeModal();
});

window.addEventListener("load", () => {
    renderUsers();
});
