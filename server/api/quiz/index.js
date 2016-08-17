"use strict";

var router = require('express').Router();
var controller = require('./quiz.controller');

router.post('/', controller.save);
router.get('/', controller.list);
router.get('/:id', controller.get);
router.delete('/:id', controller.remove);

module.exports = router;