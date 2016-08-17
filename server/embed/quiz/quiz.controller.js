"use strict";

const Quiz = require(__base + 'api/quiz/quiz.model');
const _ = require('lodash');
const doT = require('dot');
const chance = new require('chance')();

doT.templateSettings = {
  evaluate:    /\{\{\{([\s\S]+?)\}\}\}/g,
  interpolate: /\{\{=([\s\S]+?)\}\}/g,
  encode:      /\{\{!([\s\S]+?)\}\}/g,
  use:         /\{\{#([\s\S]+?)\}\}/g,
  define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
  conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
  iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
  varname: 'it',
  strip: false,
  append: true,
  selfcontained: false
};

module.exports = {
    render: function(req, res) {
        var quizId = req.params.id;

        Quiz.findById(quizId, function(err, quiz) {
            if (err) {
                return res.status(500).send(err);
            }

            // res.json(omit(quiz));

            res.render('index', {
                title: 'Hey',
                message: 'Hello there!',
                quiz: quiz,
                quizOutput: compile(quiz)
            });
        });
    }
};


function compile(quiz) {
    // 1. Compile template function
    var tempFn = doT.template(quiz.template),
        dest = {};
    _.forEach(quiz.fields, function(field) {
        dest[field.name] = chance[field.typeName.toLowerCase()]();
    });
    // 2. Use template function as many times as you like
    return tempFn(dest);
}