'use strict';

angular.module('exegentor')
  .config(function ($stateProvider) {
    $stateProvider
      .state('generator', {
        url: '/generator',
        templateUrl: 'views/generator/generator.html',
        controller: 'GeneratorController',
        controllerAs: 'vm'
      })

      .state('generator_list', {
        url: '/generator/list',
        templateUrl: 'views/generator/generator.list.html',
        controller: 'GeneratorListController',
        controllerAs: 'vm'
      })

      .state('generator_detail', {
        url: '/generator/:id',
        templateUrl: 'views/generator/generator.detail.html',
        controller: 'GeneratorDetailController',
        controllerAs: 'vm'
      })

      .state('embed', {
        url: '/embed/quiz/:id'
      });
  })

  .factory('Quiz', function($resource) {
      return $resource('api/quiz/:id');
  });
