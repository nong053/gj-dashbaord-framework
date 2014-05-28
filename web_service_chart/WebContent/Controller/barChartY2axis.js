//Draw the chart with the data stored in series1 and series2 arrays
    function barChartY2axis(series1, series2) {
    	
    	 
    	    
            MyPlot = $.jqplot("chart2", [series1, series2], {
                title: 'Calories vs Pounds',
                axesDefaults: {
                        tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                        tickOptions: {angle:35}
                        },
                axes: {
                        xaxis: {renderer: $.jqplot.CategoryAxisRenderer, tickInterval: 15},
                        yaxis: {autoscale: true, label: 'Calories'}, 
                        y2axis: {autoscale: true, label: 'Lbs'}      
                      },
                seriesDefaults: {show: true, xaxis: 'xaxis'},
                series: [{renderer: $.jqplot.BarRenderer},{yaxis: 'y2axis'}],
                highlighter:{
                    show: false
                    },
                cursor: {
                    show: false
                },
                legend: {
	                show: true
	                
	                },
                }
     );
     
        //Draw the chart.  The bools are for "clear" and "resetAxes"
        //Find the documentation @ http://www.jqplot.com/docs/files/jqplot-core-js.html#jqPlot.replot
        MyPlot.replot(true, true);
    };