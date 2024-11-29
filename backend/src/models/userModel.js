import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
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
    timestamps: true,
    strict: true
});

const User = mongoose.model('User', userSchema);

export default User;
