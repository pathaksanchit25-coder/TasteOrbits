const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller')


//routes will be added here

//routes for user
router.post('/user/register',authController.registerUser);
router.post('/user/login',authController.loginUser);
router.get('/user/logout',authController.logoutUser);


//routes for foodpartner
router.post('/partner/register',authController.registerFoodPartner);
router.post('/partner/login',authController.loginFoodPartner);
router.get('/partner/logout',authController.logoutFoodPartner);

module.exports = router;