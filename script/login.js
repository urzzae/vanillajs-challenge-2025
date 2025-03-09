const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const loginSection = document.querySelector("#login");
const mainSection = document.querySelector(".main");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginSection.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

function paintGreetings(name) {
    greeting.innerText = `${name}`;
    mainSection.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginSection.classList.remove(HIDDEN_CLASSNAME);
    mainSection.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    loginSection.classList.add(HIDDEN_CLASSNAME);
    mainSection.classList.remove(HIDDEN_CLASSNAME);
}