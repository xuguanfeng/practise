/// <reference path="../angular.d.ts" />
interface IListScope extends ng.IScope{
    pageStart : number;
    perPage : number;
    priceDate : Date;
    changePerPage : ()=>void;
    changePerPageByEnterKey:(ev:Event)=>void;
    funds: Array<any>;
    allFunds:Array<any>;

}

'use strict';

angular.module('myApp.list', ['ngRoute'])

    //Denpendency名は引数'$scope', 'FundService'で明確に指定する必要、そうしないと、コード圧縮時にエラーになる
    .controller('listCtrl', ['$scope', 'FundListService', function ($scope : IListScope, FundListService) {
        $scope.pageStart = 1;
        $scope.perPage = 0;
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
        $scope.changePerPageByEnterKey = function (ev:KeyboardEvent) {
            if (ev.keyCode == 13) {
                $scope.changePerPage();
            }
        }
//
    }]);


