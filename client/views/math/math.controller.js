'use strict';

angular.module('exegentor')
  .controller('MathController', function(MathService) {

    var vm = this;

    angular.extend(vm, {
      name: 'Math with Octave',

      execute: function() {
        vm.result = MathService.calculate(vm.code);
      }
    });

  });
