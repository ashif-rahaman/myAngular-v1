var module1 = angular.module('myApplication', []);


var controller1 = function ($scope) {

    $scope.name = 'Hamim';
};

var controller2 = function ($scope) {

    $scope.name = '';
};


module1.controller('myController1', controller1);
module1.controller('myController2', controller2);