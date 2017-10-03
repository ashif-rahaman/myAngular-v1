var module1 = angular.module('myApplication', []);


var controller1 = function ($scope) {

    var testVarObj = {

        name: 'Bangladesh',
        capital: 'Dhaka',
        flag: 'images/hill.jpg'
    };

    $scope.country = testVarObj;

    $scope.mess = 'Hello';
};


module1.controller('myController', controller1);