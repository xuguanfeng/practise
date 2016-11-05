'use strict';

angular.module('myApp.list', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'list/list.template.html',
            controller: 'listCtrl'
        });
    }])
    .controller('listCtrl', ['$scope', 'FundService', function ($scope, FundService) {
        var filterName = "";
        var pageStart = 1, perPage = -1;
        var allFunds = [];
        $scope.priceDate = new Date();
        // var fnc = function getSettlement(url) {
        //     $http.get(url).then(function (response) {
        //         return response.data.slice(0, 1);
        //     });
        // };
        console.log("ready to get funds");
        // $scope.allFunds = FundService.getList();
        // var fs = new FundService();
        FundService.;
        var tmp =1;
        // $scope.funds = $scope.allFunds;

        // $http.get('json/funds.json').then(function (response) {
        //     var orgFunds = response.data;//
        //     console.log("funds:" + orgFunds.length + "件");
        //     var index;
        //     for (index in orgFunds) {
        //         var url = 'json/' + orgFunds[index].cd + '-settlement.json';
        //
        //         // var settlement = fnc(url)
        //         // if (!settlement) {
        //         //     continue;
        //         // }
        //         $http.get(url).then(function (response2) {
        //             var settlement = response2.data.slice(0, 1);
        //             orgFunds[index].dt = settlement[0].dt;
        //             orgFunds[index].prfDist = settlement[0].prfDist;
        //         });
        //         // orgFunds[index].dt = settlement[0].dt;
        //         // orgFunds[index].prfDist = settlement[0].prfDist
        //
        //     }
        //     allFunds = orgFunds;
        //     $scope.funds = orgFunds;
        //
        // });

        $scope.changePerPage = function () {
            // var tmp = allFunds.slice(pageStart,pageStart*$scope.perPage+1);
            $scope.funds = $scope.perPage > 0 ? allFunds.slice(pageStart, pageStart * $scope.perPage + 1) : allFunds;
        }
        $scope.changePerPageByEnterKey = function (ev) {
            if (ev.keyCode == 13) {
                $scope.changePerPage();
            }
        }

    }]);

//前两个参数'$scope', '$http'是为了明确指定依赖的名字
// .controller('listCtrl', ['$scope', '$http', function ($scope, $http) {
//     var filterName = "";
//     var pageStart = 1, perPage = -1;
//     var allFunds;
//     $scope.priceDate = new Date();
//     // var fnc = function getSettlement(url) {
//     //     $http.get(url).then(function (response) {
//     //         return response.data.slice(0, 1);
//     //     });
//     // };
//     console.log("ready to get funds");
//     $http.get('json/funds.json').then(function (response) {
//         var orgFunds = response.data;//
//         console.log("funds:" + orgFunds.length + "件");
//         var index;
//         for (index in orgFunds) {
//             var url = 'json/' + orgFunds[index].cd + '-settlement.json';
//
//             // var settlement = fnc(url)
//             // if (!settlement) {
//             //     continue;
//             // }
//             $http.get(url).then(function (response2) {
//                 var settlement = response2.data.slice(0, 1);
//                 orgFunds[index].dt = settlement[0].dt;
//                 orgFunds[index].prfDist = settlement[0].prfDist;
//             });
//             // orgFunds[index].dt = settlement[0].dt;
//             // orgFunds[index].prfDist = settlement[0].prfDist
//
//         }
//         allFunds = orgFunds;
//         $scope.funds = orgFunds;
//
//     });
//
//     $scope.changePerPage = function () {
//         // var tmp = allFunds.slice(pageStart,pageStart*$scope.perPage+1);
//         $scope.funds = $scope.perPage > 0 ? allFunds.slice(pageStart, pageStart * $scope.perPage + 1) : allFunds;
//     }
//     $scope.changePerPageByEnterKey = function (ev) {
//         if (ev.keyCode == 13) {
//             $scope.changePerPage();
//         }
//     }

// }]);

