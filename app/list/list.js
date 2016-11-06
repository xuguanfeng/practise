'use strict';

angular.module('myApp.list', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'list/list.template.html',
            controller: 'listCtrl'
        });
    }])
    //Denpendency名は引数'$scope', 'FundService'で明確に指定する必要、そうしないと、コード圧縮時にエラーになる
    .controller('listCtrl', ['$scope', 'FundListService', function ($scope, FundListService) {
        $scope.pageStart = 1, $scope.perPage = -1;
        $scope.priceDate = new Date();
        console.log("ready to get funds");
        //FundListのデータ取得サービスを呼び出す、データは$scopeにセット
        FundListService($scope);
        console.log("get funds Done");

        //1ページの表示件数の変更する際のアクションのFunction
        $scope.changePerPage = function () {
            // var tmp = allFunds.slice(pageStart,pageStart*$scope.perPage+1);
            $scope.funds = $scope.perPage > 0
                ? $scope.allFunds.slice(($scope.pageStart - 1) * $scope.perPage, $scope.pageStart * $scope.perPage)
                : $scope.allFunds;
        }
        //1ページの表示件数のTextでEnterKey押す時のFunction
        $scope.changePerPageByEnterKey = function (ev) {
            if (ev.keyCode == 13) {
                $scope.changePerPage();
            }
        }

    }]);


