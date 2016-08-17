angular.module('exegentor')
    .factory('ErrorHandler', [function(){
        return function (){
            console.log("error");
        };
    }])