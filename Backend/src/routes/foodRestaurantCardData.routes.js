const express = require('express');
const router = express.Router();
const foodRestaurantDataController = require('../controller/foodRestaurantCardData.controller');


router.get('/foodrestaurantcard',foodRestaurantDataController);

module.exports = router;