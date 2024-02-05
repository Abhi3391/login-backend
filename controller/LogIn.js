const Users = require('../models/UserModel')

const login= async (req, res) => {
    const { email, password } = req.body;
  
    const obj = {
      email,
      password
    };

    console.log(email);
  
    try {
      const result = await Users.findOne(obj);
      if (result) {
        console.log("email matched", result)
        res.json("email matched");
      }
      else{
        console.log("else part")
        return res.json("successfull");

      }
    } catch (err) {
      res.status(400).send(result)
      console.log("err1", err);
    }
  };
  module.exports=login;
