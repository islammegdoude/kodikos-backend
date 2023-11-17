const express = require('express');
const router = express.Router();
const adminsController = require('../../controllers/adminControllers/admin-controller');

// login

router.get('/admin/login', adminsController.login);

router.post('/admin/register' ,adminsController.register);

module.exports = router;
