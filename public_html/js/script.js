var module1 = angular.module('myApplication', []);

var controller1 = function ($scope) {

    $scope.message = 'Hello Bangladesh to Angular!!';
};


var controller2 = function ($scope) {

    $scope.message = 'Hello Akash';
};

module1.controller('myController1', controller1);
module1.controller('myController2', controller2);