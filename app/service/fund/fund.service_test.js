'use strict';

describe('fund.service test', function() {
    var $httpBackend;
    var FundListService;
    var $scope;
    var funds = [
        {name: 'Fund X'},
        {name: 'Fund Y'},
        {name: 'Fund Z'}
    ];

    // Add a custom equality tester before each test
    beforeEach(function() {
        jasmine.addCustomEqualityTester(angular.equals);
    });

    // Load the module that contains the `Phone` service before each test
    beforeEach(module('service.fund'));

    // Instantiate the service and "train" `$httpBackend` before each test
    beforeEach(inject(function(_$httpBackend_, _FundListService_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('json/funds.json').respond(funds);

        FundListService = _FundListService_;
    }));

    // Verify that there are no outstanding expectations or requests after each test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should fetch the funds data from `json/funds.json`', function() {
        FundListService($scope);

        expect($scope.funds.length).toEqual(1);

        $httpBackend.flush();
        expect($scope.funds).toEqual(funds);
    });

});
