'use strict';

angular.module('exegentor')
  .directive('navBar', [function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/nav-bar/nav-bar.html',
        link: angular.noop
    };
}]);