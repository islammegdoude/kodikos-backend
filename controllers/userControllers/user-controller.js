const userModel = require('../../models/user-model');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// const {setTokenCookie} = require('../middlewares/verifytoken.js')
require("dotenv").config();

async function getUser(req, res, next){
    const { token } = req.body;
    try {
        const login = {
        status: res.status(200) ? 'successful' : 'err server',
        data : [await userModel.getUser(token)],
        }
        res.json(login);
    } catch (error) {
        next(error);
    }
}

async function login(req, res, next){
    const { email, password } = req.body;
    const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');
    try {
      const login = {
        status: res.status(200) ? 'successful' : 'err server',
        data : [await userModel.login(email, encryptedPassword )],
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
  const {full_name, email, password,role } = req.body;
  const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');
  const token = jwt.sign({ full_name,email}, process.env.APP_KEY);
    try {
      const login = {
        status: res.status(200) ? 'successful' : 'err server',
        data : await userModel.register(full_name, email, encryptedPassword, token,role),
      }
      res.json(login);
    } catch (error) {
      next(error);
    }  
}


async function createCv(req, res, next){

}


  module.exports = {
    register,
    login,
    createCv,
    getUser,
  };