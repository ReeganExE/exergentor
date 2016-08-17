'use strict';

var config = require('./config/environment');

module.exports = function (app) {

  // API
  app.use('/api/math', require('./api/math'));
  app.use('/api/quiz', require('./api/quiz'));
  app.use('/embed/quiz', require('./embed/quiz'));

  app.route('/:url(api|app|embed|bower_components|assets)/*')
    .get(function (req, res) {
      res.status(404).end();
    });

  app.route('/*')
    .get(function (req, res) {
      res.sendFile(
        app.get('appPath') + '/index.html',
        { root: config.root }
      );
    });

};
