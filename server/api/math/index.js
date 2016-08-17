"use strict";

var router = require('express').Router();
var controller = require('./math.controller');

router.post('/cal', controller.cal);

module.exports = router;