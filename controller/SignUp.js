const Users = require('../models/UserModel')
const signup = async (req, res) => {
    const { name, email, dob, gender, password } = req.body;

    const userData = {
        name, email, dob, gender, password
    };
    console.log("data", userData)


    try {
        let user = await Users.findOne({ email: email });
         console.log("user",user)
        //if the user is already registered  
        if (user) {
            return res.json("exits");
        } else {
            //save data to database  
            const newUser = await Users.create(userData);
            res.json("entry done");
            // const token = await createToken(newUser._id);
            // delete newUser['password'];
            // res.cookie('token', token, { httpOnly: true }).send({
            //     status: "success",
            //     data: { ...newUser, token }
            // })
        }
    }
    catch (err) {
        console.error(err.message);
        return res.json("error in data entry")

    };
};
module.exports = signup;