const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const LoginModel = require('./controller/LoginDetails')

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/backend");

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const obj = {
    email,
  };

  const result = await LoginModel.findOne(obj);

  res.status(200).send(result);
});

app.listen(3002, () => {
  console.log(`Server is running on http://localhost:3002`);
});
