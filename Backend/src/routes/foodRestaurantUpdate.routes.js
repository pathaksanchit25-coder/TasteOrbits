const express = require('express');
const router = express.Router();
const foodRestaurantUpdateController = require('../controller/foodRestaurantUpdate.controller');

router.put('/restaurant/update/:id', foodRestaurantUpdateController);

module.exports = router;