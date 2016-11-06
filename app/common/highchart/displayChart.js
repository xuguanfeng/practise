function changeChart(chartid) { 
    var chartdata;
    var navigatordisabled = false;
    var seriesOptions = [];
    if(chartid == 0){
        seriesOptions[0] = {  
            name: '基準価額',
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            data: dayPriceChart1
        };
        seriesOptions[1] = {  
            name: '基準価額に分配金(課税前)を加算',
            data: dayDistChart1,
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            id: 'dataseries'
        };
        seriesOptions[countVal] = {
            type: 'flags',
            name: '分配金',
            states : {
                hover : {
                    fillColor : '#0066CC'
                }
            },

            data: daySumChart1,
            shape: 'circlepin',
            width : 6,
            height : 6
        };
        if(strategyFlg){
        	seriesOptions[2] = {
	            type: 'area',
	            fillColor: '#99CCFF',
	            lineWidth: 1,
	            states: {
	                hover: {
	                    lineWidth: 1
	                }
	            },
	            name: '純資産総額',
	            data: dayNetChart1,
	            yAxis: 1
	        };
        }

    } else if(chartid == 1) {
        seriesOptions[0] = {  
            name: '基準価額',
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            data: monthPriceChart2
        };
        seriesOptions[1] = {  
            name: '基準価額に分配金(課税前)を加算',
            data: monthDistChart2,
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            id: 'dataseries'
        };
        seriesOptions[countVal] = {
            type: 'flags',
            name: '分配金',
            states : {
                hover : {
                    fillColor : '#0066CC'
                }
            },

            data: monthSumChart2,
            shape: 'circlepin',
            width : 6,
            height : 6
        };
        if(strategyFlg){
        	seriesOptions[2] = {
	            type: 'area',
	            fillColor: '#99CCFF',
	            lineWidth: 1,
	            states: {
	                hover: {
	                    lineWidth: 1
	                }
	            },
	            name: '純資産総額',
	            data: monthNetChart2,
	            yAxis: 1
	        };
        }
        
    } else if(chartid == 2) {
        seriesOptions[0] = {  
            name: '基準価額',
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            data: monthPriceChart3
        };
        seriesOptions[1] = {  
            name: '基準価額に分配金(課税前)を加算',
            data: monthDistChart3,
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            id: 'dataseries'
        };
        seriesOptions[countVal] = {
            type: 'flags',
            name: '分配金',

            states : {
                hover : {
                    fillColor : '#0066CC'
                }
            },
            data: monthSumChart3,
            shape: 'circlepin',
            width : 6,
            height : 6
        };
        if(strategyFlg){
        	seriesOptions[2] = {
	            type: 'area',
	            fillColor: '#99CCFF',
	            lineWidth: 1,
	            states: {
	                hover: {
	                    lineWidth: 1
	                }
	            },
	            name: '純資産総額',
	            data: monthNetChart3,
	            yAxis: 1
	        };
        }
        navigatordisabled = false;
    }
    var chart;
    
    if (chartid == 0) {
        chart = new Highcharts.StockChart({  
        chart: {  
            renderTo: 'container',
            alignTicks: false,
            borderRadius: 0
        },  
        exporting: {    
            enabled: false
        },   
        navigator : {
            enabled : false
        },
        scrollbar : {
            enabled : false
        },
        title : {  
                text : ''
            },  
        
        credits : {
            enabled: false
        },

        tooltip: {
    	    useHTML: true, 
            formatter: function() {
                var yf = new DateFormat('yyyy');
                var mf = new DateFormat('MM');
                var df = new DateFormat('dd');
                
                var s = '<b>'+ yf.format(new Date(this.x)) + '年' + mf.format(new Date(this.x)) + '月'+ df.format(new Date(this.x))  + '日</b>';
                if (this.points != null) {
                $.each(this.points, function(i, point) {
                if (i==2){
                    s += '<br/><font style="color:#3399CC">'+ point.series.name +'</font>: '+
                        Highcharts.numberFormat(point.y, 0, ',') + ' 百万円';
                }else if (i==1){
                    s += '<br/><font style="color:#0066CC">'+ point.series.name +'</font>: '+
                        Highcharts.numberFormat(point.y, 0, ',') + ' 円';
                }else if (i==0){
                    s += '<br/><font style="color:#CC0000">'+ point.series.name +'</font>: '+
                        Highcharts.numberFormat(point.y, 0, ',') + ' 円';
                }

                });
                }
                return s;
            }
        },
        xAxis: {  
            labels: {  
            formatter: function() {  
                var vDate=new Date(this.value);  
 
                return vDate.getFullYear()+"年"+(vDate.getMonth()+1)+"月";  
            },  
            
            align: 'center' 
        }  
        },
                yAxis : [{
              title: {    
                  text: '(円)' 
              } ,
              labels:{
              	formatter: function() { 
              		return Highcharts.numberFormat(this.value, 0, ',')
              	}
              },
              height: 180,
              lineWidth: 1
         },{ 
              title: {    
                  text: netTitle 
              },
              labels:{
              	formatter: function() { 
              		return Highcharts.numberFormat(this.value, 0, ',')
              	}
              },
              top: 205,
              height: 90,
              lineWidth: netLine,
              offset: 0    
         }],
        rangeSelector: {  
        enabled: false,
        inputEnabled: false,
            buttons: [{
            type: 'week',  
            count: 1,  
            text: '1w'  
        },{  
            type: 'month',  
            count: 1,  
            text: '1m'  
        }, {  
            type: 'month',  
            count: 3,  
            text: '3m'  
        }, {  
            type: 'month',  
            count: 6,  
            text: '6m'  
        }, {  
            type: 'ytd',  
            text: 'YTD'  
        }, {  
            type: 'year',  
            count: 1,  
            text: '1y'  
        }, {  
            type: 'all',  
            text: 'All'  
        }],  
            selected: 1
        },  
          
        series: seriesOptions
    });
    } else {
        chart = new Highcharts.StockChart({  
        chart: {  
            renderTo: 'container',
            alignTicks: false,
            borderRadius: 0
        },  
        exporting: {    
            enabled: false
        },   
        navigator : {
            enabled : false
        },
        scrollbar : {
            enabled : false
        },
        title : {  
                text : ''
            },  

        credits : {
            enabled: false
        },
        tooltip: {  

        },
        tooltip: {
    	    useHTML: true, 
            formatter: function() {
                var yf = new DateFormat('yyyy');
                var mf = new DateFormat('MM');
                var df = new DateFormat('dd');
                
                var s = '<b>'+ yf.format(new Date(this.x)) + '年' + mf.format(new Date(this.x)) + '月</b>';
                if (this.points != null) {
                $.each(this.points, function(i, point) {
                if (i==2){
                    s += '<br/><font style="color:#3399CC;">'+ point.series.name +'</font>: '+
                        Highcharts.numberFormat(point.y, 0, ',') + ' 百万円';
                }else if (i==1){
                    s += '<br/><font style="color:#0066CC;">'+ point.series.name +'</font>: '+
                        Highcharts.numberFormat(point.y, 0, ',') + ' 円';
                }else if (i==0){
                    s += '<br/><font style="color:#CC0000;">'+ point.series.name +'</font>: '+
                        Highcharts.numberFormat(point.y, 0, ',') + ' 円';
                }

                });
                }
                return s;
            }
        },
        xAxis: {  
            labels: {  
            formatter: function() {  
                var vDate=new Date(this.value);  
 
                return vDate.getFullYear()+"年";  
            },  
            
            align: 'center' 
        }  
        },
                yAxis : [{
              title: {    
                  text: '(円)' 
              } ,
              labels:{
              	formatter: function() { 
              		return Highcharts.numberFormat(this.value, 0, ',')
              	}
              },
              height: 180,
              lineWidth: 1
         },{ 
              title: {    
                  text: netTitle 
              },
              labels:{
              	formatter: function() { 
              		return Highcharts.numberFormat(this.value, 0, ',')
              	}
              },              
              top: 205,
              height: 90,
              lineWidth: netLine,
              offset: 0    
         }],
        rangeSelector: {  
        enabled: false,
        inputEnabled: false,
            buttons: [{
            type: 'week',  
            count: 1,  
            text: '1w'  
        },{  
            type: 'month',  
            count: 1,  
            text: '1m'  
        }, {  
            type: 'month',  
            count: 3,  
            text: '3m'  
        }, {  
            type: 'month',  
            count: 6,  
            text: '6m'  
        }, {  
            type: 'ytd',  
            text: 'YTD'  
        }, {  
            type: 'year',  
            count: 1,  
            text: '1y'  
        }, {  
            type: 'all',  
            text: 'All'  
        }],  
            selected: 1
        },  
          
        series: seriesOptions
    });
    }
} 
