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
myModule.factory('FundListService', ['$http', function (http) {
    return function ($scope) {
        http.get('json/funds.json').then(function (response) {
            $scope.allFunds = response.data;
            $scope.funds = response.data;
        });
    };
}]);


