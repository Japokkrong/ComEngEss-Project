import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        
        res.status(200).json({ message: "OK" });
    }
    catch(err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Email or username is already registered" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

export const getUsers = async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ error: "Username not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ error: "Internal server error." });
    }
};