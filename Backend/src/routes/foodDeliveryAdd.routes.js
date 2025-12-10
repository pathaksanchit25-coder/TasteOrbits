const express = require('express');
const router = express.Router();
const foodDeliveryController = require('../controller/foodDeliveryController.controller');
const authFoodPartnerMiddleware = require('../middleware/auth.middleware');

//routes will be added here

//route to add a new food delivery restaurant
router.post('/partner/addDelivery',authFoodPartnerMiddleware.authFoodPartnerMiddleware,foodDeliveryController);

    
module.exports = router;