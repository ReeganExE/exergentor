'use strict';

angular.module('exegentor')
  .controller('GeneratorController', function($http, Quiz) {

    var vm = this;

    angular.extend(vm, {
      name: 'Question Generator',

      subjectModal: $('#question-subject'),

      fields: [{}],

      addField: function() {
        // add empty field
        vm.fields.push({});
      },

      removeField: function(field) {
        _.remove(vm.fields, field);
      },

      loadExTemplate: function() {
        $http.get('assets/template.txt').then(res => vm.template = res.data);
      },

      prepareSave: function() {
        vm.subjectModal.modal();
      },

      saveQuiz: function() {
        var quiz = {
          template: vm.template,
          subject: vm.subject,
          fields: vm.fields.map(f => angular.copy(f))
        };

        console.log(quiz);
        Quiz.save(quiz, () => {
          vm.subject = '';
          vm.subjectModal.modal('hide');
        });
      }
    });

  });
