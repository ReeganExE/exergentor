"use strict";


const Quiz = require('./quiz.model');
const _ = require('lodash');

function end(res, err) {
    res.status(500).json(err);
}

function omit(quiz) {
    quiz = quiz.toObject();
    quiz.id = quiz._id;
    return _.omit(quiz, ['__v', '_id']);
}

module.exports = {
    get: function(req, res) {
        Quiz.findById(req.params.id, function(err, quiz) {
            if (err) {
                return end(res, err);
            }

            res.json(omit(quiz));
        });
    },

    list: function(req, res) {
        Quiz.find(function(err, beers) {
            if (err) {
                return end(res, err);
            }

            res.json(beers.map(quiz => omit(quiz)));
        });
    },

    save: function(req, res) {
        var quiz = new Quiz();

        _.extend(quiz, req.body, {
            created: new Date()
        });

        quiz.save(function(err) {
            if (err) {
                return end(res, err);
            }
            res.json(omit(quiz));
        });
    },

    remove: function(req, res) {
        Quiz.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                return end(res, err);
            }

            res.json({
                success: true
            });
        });
    }
};
