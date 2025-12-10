const express = require('express');
const router = express.Router();
const userUpdateController = require('../controller/userUpdate.controller')

router.post('/user/update',userUpdateController);

module.exports = router;