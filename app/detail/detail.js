'use strict';

angular.module('myApp.detail', ['ngRoute'])

    .controller('detailCtrl', function DetailCtrl($scope, $http, $routeParams) {
        $http.get('json/' + $routeParams.id + '.json').then(function (response) {
            $scope.fund = response.data;
        });
    });

