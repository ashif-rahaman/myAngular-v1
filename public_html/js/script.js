var module1 = angular.module('myApplication', []);

var controller1 = function ($scope) {

    $scope.message = 'Hello Bangladesh to Angular!!';
};


module1.controller('myController', controller1);