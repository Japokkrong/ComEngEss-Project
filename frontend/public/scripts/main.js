import { handleLogin, handleRegister } from "./users.js";


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginBtn").addEventListener("click", handleLogin);
    document.getElementById("registerBtn").addEventListener("click", handleRegister);
}   );

