'use strict';

angular.module('exegentor', [
    'ui.router',
    'ngResource',
    'ngAnimate',
    'angular-loading-bar',
    'ngCookie'
  ])
  .config(function($locationProvider, $urlRouterProvider, cfpLoadingBarProvider) {

    // For any unmatched url, redirect to /404
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise("404");
    $locationProvider.html5Mode(true);

    cfpLoadingBarProvider.includeSpinner = false;
  });
