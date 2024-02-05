const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const login=require('./controller/LogIn')
const signup=require('./controller/SignUp')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/backend");


app.post('/login',login)
app.post('/signup',signup)





app.listen(3001, () => {
  console.log(`Server is running on http://localhost:3001`);
});
