'use strict';

angular.module('exegentor')
  .config(function ($stateProvider) {
    $stateProvider
      .state('math', {
        url: '/math',
        templateUrl: 'views/math/math.html',
        controller: 'MathController',
        controllerAs: 'vm'
      });
  });
