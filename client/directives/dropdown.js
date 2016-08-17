'use strict';

angular.module('exegentor')
  .directive('dropdownToggle', function(){
    return {
        restrict: 'C',
        link: function($scope, iElm) {
            iElm.dropdown();
        }
    };
});