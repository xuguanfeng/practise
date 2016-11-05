'use strict';

// angular.module('service.fund', [], function($provide) {
//     $provide.factory('FundListService', ['$http', function(http) {
//         var fundList;
//         http.get('json/funds.json').then(function (response) {
//             var fundList = response.data;
//         });
//         return fundList;
//     }]);
// });

var myModule = angular.module('service.fund', []);
myModule.factory('FundService', ['$http', function (http) {
    return function (scope,allFunds) {
    // this.getList = function () {
    // var getList = function(){
        http.get('json/funds.json').then(function (response) {
            scope.funds = response.data;
            allFunds = response.data;
            var tmp=1;
        });
        // this.getList = function(){
        //     var fundList;
        //     http.get('json/funds.json').then(function (response) {
        //         fundList = response.data;
        //     });
        //     return fundList;
        // };
    };

        // var fundList;
        // http.get('json/funds.json').then(function (response) {
        //     fundList = response.data;
        // });
        // return fundList;
        // return getList();
    // };


    // this.getSettlement = function(cd){
    //     var settlement;
    //     http.get('json/' + fundCd + '-settlement.json').then(function (response) {
    //         settlement = response.data;
    //     });
    //     return settlement;
    // };
    // return this.getList();
}]);

// myModule.factory('FundSettlementService', function($http,fundCd){
//     var settlement;
//     $http.get('json/' + fundCd + '-settlement.json').then(function (response) {
//         settlement = response.data;
//     });
//     return settlement;
// });

// angular.module('service.fund', ['$http']).factory('FundService', ['$http']
// // angular.module('service.fund').factory('FundService', ['$http',
//     function ($http) {
//         //return $resource('phones/:phoneId.json', {}, {
//         return $resource('json/:fundId.json', {}, {
//             query: {
//                 method: 'GET',
//                 params: {fundId: 'funds'},
//                 isArray: true
//             }
//         });
//     }
// ]);
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