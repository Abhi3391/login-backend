const express = require('express');
const router = express.Router();

const login = require('../controller/login.controller')
const signup = require('../controller/signup.controller')


router.post('/login', login)
router.post('/signup', signup)

module.exports=router;