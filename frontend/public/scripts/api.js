import { BACKEND_URL } from "./config.js";

export async function getUsers() {
    const response = await fetch(`${BACKEND_URL}/api/users`);
    const users = await response.json();
    return users;
}

export async function RegisterUser(user) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        
        const data = await response.json();
        if (response.status === 500) {
            throw new Error("Internal Server Error");
        }
        
        return {
            success: response.ok,
            message: data.message || data.error,
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null
        };
    }
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
        
        if (response.status === 500) {
            throw new Error("Internal Server Error");
        }
        
        return {
            success: response.ok,
            message: data.message || data.error,
            data: data
        };
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null
        };
    }
}