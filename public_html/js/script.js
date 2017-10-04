var module1 = angular.module('myApplication', []);


var controller1 = function ($scope) {

    var countries = [

        {
            name: 'Bangladesh',
            cities: ['Dhaka', 'Chittagong', 'Khulna City', 'Rajshahi']
        },
        {
            name: 'India',
            cities: ['Kalkatta', 'Delhi', 'Bombay']
        },
        {
            name: 'Pakistan',
            cities: ['Islamabad', 'Shindhu']
        }
    ];

    $scope.countries = countries;
};


module1.controller('myController', controller1);