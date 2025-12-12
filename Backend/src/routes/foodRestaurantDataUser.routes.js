const express = require('express');
const router = express.Router();
const foodRestaurantDatauser = require('../controller/foodRestaurantDataUser.controller')


router.get('/data',foodRestaurantDatauser);


module.exports = router;