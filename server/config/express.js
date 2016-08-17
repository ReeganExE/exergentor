'use strict';

var express = require('express');
var compression = require('compression');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

// auth purpose
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var mongoose = require('mongoose');

var config = require('./environment');

module.exports = function (app) {

  var env = config.env;

  app.set('env', env);
  app.set('view engine', 'pug');
  app.set('views', path.join(__dirname, '../views'));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.use(morgan('dev'));
  app.use(express.static(path.join(config.root, 'client')));
  app.set('appPath', 'client');

  app.use(session({
    secret: config.secrets.session,
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: mongoose.connection })
  }));

  if (env === 'development' || env === 'test') {
    app.use(require('errorhandler')());
  }

};
