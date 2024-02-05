const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    name:String,
    email:String,
    dob:Date,
    gender:String,
    password:Number,

});

const Users= mongoose.model("signup", UserModel);

module.exports = Users;
