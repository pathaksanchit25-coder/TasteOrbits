const express = require('express');
const router = express.Router();
const foodRestaurantAdd = require('../controller/foodRestaurant.controller')


router.post('/partner/addRestaurant',foodRestaurantAdd);


module.exports = router