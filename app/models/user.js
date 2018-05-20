const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, "Invalid username provided"],
        trim: true,
        required: [true, "username is required"],
        unique: true,
        index: true
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+/, "email is not valid"],
        trim: true,
        required: [true, "email is required"],
        unique: true,
    },
    password: { type: String, required: true, }
}, { timestamps: true });

UserSchema.methods.checkPassword = (   ) => {

}

module.exports = mongoose.model("User", UserSchema);


