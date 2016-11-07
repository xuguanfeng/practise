'use strict';

angular.module('myApp.detail', ['ngRoute', 'highcharts-ng'])

    .controller('detailCtrl', function DetailCtrl($scope, $http, $routeParams) {



        // This is not a highcharts object. It just looks a little like one!
        $scope.chartConfig = {

            options: {
                //This is the Main Highcharts chart config. Any Highchart options are valid here.
                //will be overriden by values specified below.
                chart: {
                    type: 'bar'
                    // type: 'candlestick'
                },
                tooltip: {
                    style: {
                        padding: 10,
                        fontWeight: 'bold'
                    }
                }
            },
            //The below properties are watched separately for changes.

            //Series object (optional) - a list of series using normal Highcharts series options.
            series: [{
                data: [10, 15, 12, 8, 7]
            }],
            //Title configuration (optional)
            title: {
                text: 'Hello'
            },
            //Boolean to control showing loading status on chart (optional)
            //Could be a string if you want to show specific loading text.
            loading: false,
            //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
            //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
            xAxis: {
                currentMin: 0,
                currentMax: 20,
                title: {text: 'values'}
            },
            //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
            useHighStocks: true,
            //size (optional) if left out the chart will default to size of the div or something sensible.
            size: {
                width: 400,
                height: 300
            },
            //function (optional)
            func: function (chart) {
                //setup some logic for the chart
            }
        };

        //jsonからデータを動的に読み込む
        $http.get('json/' + $routeParams.id + '.json').then(function (response) {
            $scope.fund = response.data;
        });

    });


