'use strict';

angular.module('exegentor')
  .factory('MathService', function($http) {
    let service = {};
    service.calculate = function(code) {
      var result = {
        $resolved: false,
        $promise: $http({
          url: '/api/math/cal',
          method: "POST",
          data: {
            code: code
          }
        }).then(res => {
          angular.extend(result, res.data);
          return result;
        }).catch(res => {
          var errr = res.data;
          errr.value = errr.error;
          angular.extend(result, res.data);
        }).finally(() => {
          result.$resolved = true;
        })
      };
      return result;
    };
    return service;
  });
