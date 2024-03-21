const Users = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const login = async (req, res) => {
  const { email, password } = req.body;

  // const obj = {
  //   email,
  //   password,
  // };

  // console.log("obj", obj);

  try {
    const result = await Users.findOne({ email: email });
    console.log("result",result)

    if (!result) {
      console.log("email does not  exits", result)
      res.json("email does not exits");
    }
    else {
      console.log("email matched", result);

        if(await bcrypt.compare(password, result.password)){
        
            const token = jwt.sign(
              { id: result._id, email: result.email },
              'shhhhh',
              {
                expiresIn: "1h"
              });

            const tokenadded = await result.updateOne({ token: token })

            const options = {
              httpOnly: true,
            }

            console.log("token added", tokenadded)
            return res.cookie('token', token, options).json({ message: "login successful",  result });


          }
          else{
            res.send("Password is incorrect")
          }
        }
      }
    catch (err) {
      res.status(400).send("result not found");
      console.log("err1", err);
    }
  };
  module.exports = login;
