const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true 
    },
    // dob: Date,
    // gender: {
    //     type: String,
    //     enum: ['Male', 'Female', 'Other'] 
    // },
    password: {
        type: String,
        required: true
    },
    token: String,

    // createdAt: {
    //     type: Date,
    //     default: Date.now 
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now 
    // }
});

const Users = mongoose.model("User", UserModel);

module.exports = Users;
