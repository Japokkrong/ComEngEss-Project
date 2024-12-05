import { RegisterUser, LoginUser } from "./api.js";
import { speak } from "./speak.js";

export async function handleLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const result = await LoginUser({ username, password });

    console.log(result);

   speak(result.message); 
   if (result.success) {
       window.location.href = "../input.html";
   }
}

export async function handleRegister() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const result = await RegisterUser({ username, password });

    console.log(result);

   speak(result.message); 
}