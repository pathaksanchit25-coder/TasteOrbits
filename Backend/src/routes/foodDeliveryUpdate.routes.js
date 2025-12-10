const express = require('express');
const router = express.Router();
const foodDeliveryUpdate = require('../controller/foodDeliveryUpdate.controller');

// Update food delivery by ID
router.put('/delivery/update/:id', foodDeliveryUpdate);

module.exports = router;