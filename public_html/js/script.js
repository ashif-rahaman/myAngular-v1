

var main = angular.module("main", []);

var image = {

    url: "images/hill.jpg"
};

var SimpleController = function ($scope) {

    $scope.image = image;
};

main.controller("SimpleController", SimpleController);