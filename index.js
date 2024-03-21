const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')


const routes= require('./src/routes/route')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true
  }
));

mongoose.connect("mongodb+srv://abhishek:Abhi%40123@cluster0.vzajave.mongodb.net/");

app.use('/',routes)


app.listen(3001, () => {
  console.log(`Server is running on http://localhost:3001`);
});
