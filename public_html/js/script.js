var module1 = angular.module('myApplication', []);

//var countries;


var controller1 = function ($scope) {

    $scope.countries = ['Bangladesh', 'India'];

    $scope.addCountry = function (inputId) {

        var newCountry = document.getElementById(inputId).value.trim();

        document.getElementById(inputId).value = '';

        var size = $scope.countries.length;

        if (newCountry !== '' && $scope.countries.indexOf(newCountry) === -1) {

            $scope.countries[size] = newCountry;
        }
    };
};


module1.controller('myController', controller1);

//var addCountry = function (inCountry) {
//
//    var newCountry = Document.getElementById(inCountry).value.trim();
//    var length = countries.length;
//
//    if (newCountry !== '') {
//
//        countries[length] = newCountry;
//    }
//};