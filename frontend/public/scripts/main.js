import { handleLogin, handleRegister } from "./users.js";

function test() {
    console.log("Hello World");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", handleLogin);
    document.getElementById("registerBtn").addEventListener("click", handleRegister);
}   );

