const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}
loginForm.addEventListener("submit", onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName===null){    
    loginForm.classList.remove(HIDDEN_CLASSNAME); //show the form
}else{
    paintGreetings(savedUserName); // show the greetings
}