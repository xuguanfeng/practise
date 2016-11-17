/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
interface IDetailScope extends ng.IScope {
    chartConfig: any;
    fund: Array<any>;
    priceDate: Date;
}
interface IDetailRouteParamService extends ng.route.IRouteParamsService {
    id: string;
}
interface IResponse extends ng.IHttpResponseTransformer {
    data: any;
}

'use strict';

angular.module('myApp.detail', ['ngRoute', 'highcharts-ng'])

    .controller('detailCtrl', function ($scope: IDetailScope, $http: ng.IHttpService, $routeParams: IDetailRouteParamService) {



        // This is not a highcharts object. It just looks a little like one!
        $scope.chartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                rangeSelector: {
                    selected: 1
                },

                title: {
                    text: 'AAPL Stock Price'
                },
                navigator: {
                    enabled:true,
                    height: 40,
                    margin: 25,
                    series: {
                        type: 'areaspline',
                        color: '#4572A7',
                        fillOpacity: 0.05,
                        dataGrouping: {
                            smoothed: true
                        },
                        lineWidth: 1,
                        marker: {
                            enabled: false
                        }
                    }
                },
                scrollbar:{
                    enabled:false
                }


            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            // series: [{
            //     data: [10, 15, 12, 8, 7]
            // }],
            series: [{
                type: 'candlestick',
                showInNavigator: true,
                name: 'AAPL Stock Price',
                data: [],
                dataGrouping: {
                    units: [
                        [
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]
                    ]
                }
            }],
            //Title configuration (optional)
            // title: {
            //     text: 'Hello'
            // },
            //Boolean to control showing loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
            // xAxis: {
            //     currentMin: 0,
            //     currentMax: 20,
            //     title: { text: 'values' }
            // },
            //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
            useHighStocks: true,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            size: {
                width: 514,
                height: 310
            },
            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };

        //jsonからデータを動的に読み込む
        $http.get('json/' + $routeParams.id + '.json').then((response: IResponse) => {
            $scope.fund = response.data;
        });

        $http.jsonp('https://www.highcharts.com/samples/data/jsonp.php?a=e&filename=aapl-ohlc.json&callback=JSON_CALLBACK')
            .success(function (res) {
                $scope.chartConfig.series[0].data = res;
            });

    });


