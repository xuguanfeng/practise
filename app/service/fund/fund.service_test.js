'use strict';

describe('fund.service test', function () {
    var $scope, $rootScope, $httpBackend, createListService;
    var $FundListService;

    // Load the module that contains the `Phone` service before each test
    beforeEach(module('service.fund'));
    // beforeEach(module('service.fund', ['ngMock']));
    // angular.module('service.fund', ['ngMock']);
    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        //Serviceの宣言に参照し、Service名,httpBackendは引き数とする、myModule.factory('FundListService', ['$http', function (http) {
        $FundListService = $injector.get('FundListService', $httpBackend);
        createListService = function () {
            //Serviceのreturn function(呼び出し)を参照し、$scopeは引数として渡す、return function ($scope) {
            return $FundListService($scope);
        };
    }));


    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    //
    it('FundListService Test `json/funds.json`', function () {
        //テスト用のダミーデータ
        var funds = [
            {name: 'Fund X'},
            {name: 'Fund Y'},
            {name: 'Fund Z'}
        ];
        //$httpのget json/funds.jsonの場合はResponseをダミーデータで置き換える
        $httpBackend.whenGET('json/funds.json').respond(funds);
        // FundListService($scope);
        createListService();
        $scope.$apply(function () {
            // $scope.runTest();
        });
        $httpBackend.flush();

        //ダミーデータは$scopeにセットしたかをテスト
        expect($scope.funds).toEqual(funds);
        expect($scope.allFunds).toEqual(funds);

        // expect($scope.funds).toEqual(funds);
    });

});
