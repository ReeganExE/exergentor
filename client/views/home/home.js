'use strict';

angular.module('exegentor')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home/home.html'
      });
  });
