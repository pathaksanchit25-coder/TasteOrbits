const express = require('express');
const foodPartnerUpdateController = require('../controller/foodPartnerUpdate.controller');
const router = express.Router();

router.post('/partner/update',foodPartnerUpdateController)

module.exports = router;