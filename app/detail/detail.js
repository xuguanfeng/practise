'use strict';

angular.module('myApp.detail', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/detail/:id', {
            templateUrl: 'detail/detail.template.html',
            controller: 'detailCtrl'
        });
    }])
    // .filter('areaNm', function () {
    //     return function (cd) {
    //         return cd == 0 ? "国内" : "グローバル";
    //     }
    // })
    // .filter('tpNm', function () {
    //     return function (cd) {
    //         return cd == 0 ? "追加型投信" : "日々決算型投信";
    //     }
    // })
    // .filter('toushiNm', function () {
    //     return function (cd) {
    //         return cd == 0 ? "株式" : "債券";
    //     }
    // })

    .controller('detailCtrl', function DetailCtrl($scope, $http, $routeParams) {
        $http.get('json/' + $routeParams.id + '-attribute.json').then(function (response) {
            $scope.fund = response.data;
        });
    });

