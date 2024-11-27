import { BACKEND_URL } from "./config.js";

export async function getUsers() {
    const response = await fetch(`${BACKEND_URL}/api/users`);
    const users = await response.json();
    return users;
}

export async function RegisterUser(user) {
    fetch(`${BACKEND_URL}/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
}

export async function LoginUser(user) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error);
        }
        
        return data;
    } catch (error) {
        throw error;
    }
}