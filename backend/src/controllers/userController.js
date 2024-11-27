import User from "../models/userModel.js";

export const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        
        res.status(200).json({ message: "OK" });
    }
    catch(err) {
        if (err.name === "ValidationError") {
            res.status(400).json({ error: "Bad Request" });
        } else {
            res.status(500).json({ error: "Internal server error." });
        }
    }
};

export const getUsers = async (req, res) => {
    const users = await User.find();

    res.status(200).json(users);
};
