'use strict';

$(function () {
    $.getJSON('json/chart/2011101B-D-chart.json', function (data) {
        // Create the chart
        $('#highStockContainer').highcharts('StockChart', {
            rangeSelector: {
                selected: 1
            },
            title: {
                text: 'AAPL Stock Price'
            },
            series: [{
                name: 'AAPL',
                data: data,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
});