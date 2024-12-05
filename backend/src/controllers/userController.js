import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ error: "Username and password are required" });
        }

        const newUser = new User({ username, password });
        await newUser.save();
        
        res.status(200).json({ message: "Registration successful" });
    }
    catch(err) {
          if (err.code === 11000) {

            return res.status(400).json({ error: "Username already registered" });

        }
        if (err.name === "ValidationError") {
            if (err.errors.password) {
                res.status(400).json({ error: err.errors.password.message });
            } else {
                res.status(400).json({ error: "Validation error" });
            }
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};


export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

            if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: "Username not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: "Password is incorrect" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ error: "Internal server error." });
    }
};