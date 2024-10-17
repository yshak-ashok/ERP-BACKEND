const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

//Routes
router.get('/', userController.getUsers);
router.post('/user', userController.createUser);

module.exports = router;
