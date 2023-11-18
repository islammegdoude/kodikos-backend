const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/userControllers/user-controller');

// login
router.post('/user/login', usersController.login);

// register
router.post('/user/register' ,usersController.register);

// create cv
router.post('/user/create-cv', usersController.createCv);

// get user information with token
router.get('/user/get-user', usersController.getUser);
module.exports = router;
