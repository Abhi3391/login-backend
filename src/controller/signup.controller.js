const { response } = require('express');
const Users = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const signup = async (req, res) => {
    // const { name, email, dob, gender, password } = req.body;
    const { name, email, password } = req.body;

    // const userData = {
    //     name, email, dob, gender, password
    // };
    const userData = {
        name:name, 
        email:email,  
        password:password
    };
    // console.log("data", userData)



    try {
        let user = await Users.findOne({ email: email });
         console.log("user",user)
         console.log(null)
        
         if (user) {
            res.status(409).json({ message: "Email already exists" })
         }

         const encryptPassword= await bcrypt.hash(password, 10)
         userData.password = encryptPassword

        if (!user) {
            //save data to database  
            console.log("signup else part")
            const newUser = await Users.create(userData);
            res.json("entry done");
            } else {
            return res.json("exits");
        }
    }
    catch (err) {
        console.error(err.message);
        return res.json("Error in data entry")

    };
};
module.exports = signup;