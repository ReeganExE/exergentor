"use strict";

var router = require('express').Router();
var controller = require('./quiz.controller');

router.get('/:id', controller.render);

module.exports = router;