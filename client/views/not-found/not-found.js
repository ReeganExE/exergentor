'use strict';

angular.module('exegentor')
  .config(function ($stateProvider) {
    $stateProvider
      .state('notFound', {
        url: '/404',
        templateUrl: 'views/not-found/404.html'
      });
  });
