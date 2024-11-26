import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate: {
            validator: function(value) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
                return passwordRegex.test(value);
            },
            message: 'Password must contain at least one lowercase letter, one uppercase letter, and one number'
        }
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
