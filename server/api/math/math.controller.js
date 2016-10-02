'use strict';

var Octave = require('./octave.service');

module.exports = {
  cal: function OctaveCalulcate(req, res) {
    var code = req.body.code;
    Octave.cal(code).then(val => {
      res.json({
        value: val
      });
    }).catch(err => {
      res.status(500).json({
        error: err.message
      });
    });
  }
};
