const adminModel = require('../model/admin-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();

async function login(req, res, next){
    const { email, password } = req.body;
    const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');
    try {
      const login = {
        status: res.status(200) ? 'successful' : 'err server',
        data : [await adminModel.login(email, encryptedPassword )],
      }

      if (login.data[0].token != null) {
        res.status(200);
        res.json(login);
      } else {
        res.status(200);
        res.json({status:'email or password is incorect'})
      }
      //setTokenCookie(res, login.data[0].token);
      
    } catch (error) {
      next(error);
    }
  }

async function register(req, res, next){
  const {fullName, email, password } = req.body;
  const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');
  const token = jwt.sign({ fullName,email}, process.env.APP_KEY);
    try {
      const login = {
        status: res.status(200) ? 'successful' : 'err server',
        data : await adminModel.register(username, email, encryptedPassword, token),
      }
      res.json(login);
    } catch (error) {
      next(error);
    }  
}


  module.exports = {
    register,
    login
  };