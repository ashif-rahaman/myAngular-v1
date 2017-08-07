var main = angular.module("main", []);

//var image = {
//
//    url: "images/hill.jpg"
//};
//
//var employees = [
//
//    {name: "Go"}
//];
//
//var addButton = function (btnName) {
//
//    employees.assign({"name": btnName});
//};
//
//var SimpleController = function ($scope) {
//
//    $scope.message = '';
//    $scope.addButton = addButton();
//    $scope.employees = employees;
//
//};
//
//main.controller("SimpleController", SimpleController);

main.controller('buttonAction', ['$scope', function ButtonAction(scope) {
        scope.buttonName = 'Nothing';
        scope.isActive = false;
        scope.activate = function () {
            scope.isActive = !scope.isActive;
        };
    }]);

main.controller('addingNamesController', ['$scope', function AddingNamesController(scope) {

        scope.users = [{name: 'Abc', age: 25}];
        scope.name = '';
        scope.age = 0;
        scope.addName = function () {

            var user = {name: scope.name, age: scope.age};
            scope.users.push(user);
        };
    }]);