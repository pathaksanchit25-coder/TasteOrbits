const express = require('express');
const router = express.Router();
const foodPartnerDashboardController = require('../controller/foodPartnerDashboard.controller')


router.get('/dashboard',foodPartnerDashboardController);


module.exports = router;

