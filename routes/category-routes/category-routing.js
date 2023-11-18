const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/categoryControllers/category-controller');





router.post('/admin/register' ,adminsController.register);

module.exports = router;
