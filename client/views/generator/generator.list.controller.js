'use strict';

angular.module('exegentor')
    .controller('GeneratorListController', function(Quiz) {

        var vm = this;

        angular.extend(vm, {
            name: 'Questions',
            quizs: Quiz.query(),

            remove: function(quiz) {
                quiz.$remove({ id: quiz.id });
            }
        });

    })
    .controller('GeneratorDetailController', function(Quiz, $stateParams) {

        var vm = this;

        angular.extend(vm, {
            name: 'Question Detail',
            quiz: $stateParams.quiz || Quiz.get({ id: $stateParams.id })
        });

    });
