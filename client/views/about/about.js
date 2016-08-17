'use strict';

angular.module('exegentor')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'views/about/about.html'
      });
  });
