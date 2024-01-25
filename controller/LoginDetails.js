const mongoose = require('mongoose');

const Login = new mongoose.Schema({
    email: String,
    password: String
});

const LoginModel= mongoose.model("users", Login)

module.exports = LoginModel;
