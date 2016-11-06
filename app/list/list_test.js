'use strict';

describe('listCtrl test', function () {
    var $scope, $rootScope, createController;
    //Dummy データ,jsonから取得ではなく、テスト用のものをここで定義する
    var funds = [
        {name: 'Fund X'},
        {name: 'Fund Y'},
        {name: 'Fund Z'}
    ];
    //FundListServiceのMock、Dummyのデータを$scopeにセットするFunctionを定義
    var FundListServiceMock = function () {
        $scope.funds = funds;
        $scope.allFunds = funds;
    };

    beforeEach(module('myApp.list'));
    beforeEach(inject(function ($injector) {
        //$scopeの初期化
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        //$controllerの取得用のFunctionを定義
        var $controller = $injector.get('$controller');
        createController = function () {
            return $controller('listCtrl', {
                '$scope': $scope,
                'FundListService': FundListServiceMock//本物のServiceはMockでセット
            });
        };
    }));

    it('listCtrl 初期化テスト', function () {
        var controller = createController();
        expect($scope.funds.length).toEqual(3);
        expect($scope.allFunds.length).toEqual(3);
        expect($scope.pageStart).toEqual(1);
        expect($scope.perPage).toEqual("");
    });

    it('changePerPage() テスト', function () {
        var controller = createController();
        //1ページの表示件数を変更
        $scope.perPage = 1;
        $scope.changePerPage();
        expect($scope.funds.length).toEqual(1);
        expect($scope.allFunds.length).toEqual(3);
        expect($scope.funds).toEqual([
            {name: 'Fund X'}
        ]);
        //1ページの表示件数を変更
        $scope.perPage = 2;
        $scope.changePerPage();
        expect($scope.funds).toEqual([
            {name: 'Fund X'},
            {name: 'Fund Y'},
        ]);
        //1ページの表示件数を変更
        $scope.perPage = 0;
        $scope.changePerPage();
        expect($scope.funds).toEqual([
            {name: 'Fund X'},
            {name: 'Fund Y'},
            {name: 'Fund Z'}
        ]);
    });

    it('changePerPageByEnterKey() テスト', function () {
        var controller = createController();
        var ev;
        ev={keyCode:13};
        //1ページの表示件数を変更
        $scope.perPage = 1;
        $scope.changePerPageByEnterKey(ev);
        expect($scope.funds.length).toEqual(1);
        expect($scope.allFunds.length).toEqual(3);
        expect($scope.funds).toEqual([
            {name: 'Fund X'}
        ]);
        //1ページの表示件数を変更
        $scope.perPage = 2;
        $scope.changePerPageByEnterKey(ev);
        expect($scope.funds).toEqual([
            {name: 'Fund X'},
            {name: 'Fund Y'},
        ]);
        //1ページの表示件数を変更
        $scope.perPage = 0;
        $scope.changePerPageByEnterKey(ev);
        expect($scope.funds).toEqual([
            {name: 'Fund X'},
            {name: 'Fund Y'},
            {name: 'Fund Z'}
        ]);

        //Enter以外のコードの場合
        createController();
        ev={keyCode:12};
        //1ページの表示件数を変更
        $scope.perPage = 1;
        $scope.changePerPageByEnterKey(ev);
        expect($scope.funds.length).toEqual(3);
        expect($scope.allFunds.length).toEqual(3);
        expect($scope.funds).toEqual([
            {name: 'Fund X'},
            {name: 'Fund Y'},
            {name: 'Fund Z'}
        ]);

        ev={keyCode:14};
        //1ページの表示件数を変更
        $scope.perPage = 1;
        $scope.changePerPageByEnterKey(ev);
        expect($scope.funds.length).toEqual(3);
        expect($scope.allFunds.length).toEqual(3);
        expect($scope.funds).toEqual([
            {name: 'Fund X'},
            {name: 'Fund Y'},
            {name: 'Fund Z'}
        ]);
    });

});
