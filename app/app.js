'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.list',
    'myApp.detail',
    'commonFilter',
    'service.fund',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/list', {
            templateUrl: 'list/list.template.html',
            controller: 'listCtrl'
        })
        .when('/detail/:id', {
            templateUrl: 'detail/detail.template.html',
            controller: 'detailCtrl'
        });
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
