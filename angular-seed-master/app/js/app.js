'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);

app.factory('hello1',function () {
    return {
        hello: function () {
            console.log("hello1 service1!");
        }
    }
});

app.factory('hello2',function () {
    return {
        hello: function () {
            console.log("hello2 service2!");
        }
    }
});

