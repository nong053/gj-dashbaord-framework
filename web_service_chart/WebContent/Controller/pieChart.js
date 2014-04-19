var pieChart = function(chartId,data,option){

	 //var value= eval("("+data+")");
	  
	
	        //[[\"Heavy Industry\",12],[\"Retail\",9]]
	var value = "";
	value+="[";
	
	$.each(data,function(index,indexEntry){
		if(index==0){
			value+="[";
			value+="\""+indexEntry[0]+"\""+","+indexEntry[1];
			
		}else{
			value+=",[";
			value+="\""+indexEntry[0]+"\""+","+indexEntry[1];
		}
		value+="]";
	});
	value+="]";
	var valueObj= eval("("+value+")");
	
	
	            var plot1 = jQuery.jqplot (chartId, [valueObj],
	            		
	              {
	            	
	            	seriesColors: option['theme'],
	            	title: option['title'],
	                seriesDefaults: {
	                  // Make this a pie chart.
	                  renderer: jQuery.jqplot.PieRenderer,
	                  rendererOptions: {
	                    // Put data labels on the pie slices.
	                    // By default, labels show the percentage of the slice.
	                    showDataLabels: true,
	                    dataLabels: option['dataLabels']
	                  }
	                },
	                highlighter: {
	                	  show: true,
	                	  formatString:'%s %d', 
	                	  tooltipLocation:'sw', 
	                	  useAxesFormatters:false,
	                	  tooltipContentEditor:tooltipContentEditorByCate
	                	},
	                legend: { show:true, location: option['location'], placement :option['placement']}
	              }
	              
	            );
	            
	            //$(".jqplot-highlighter-tooltip").css({"background":option['theme'][0],"color":option['tooltipTextColor'],"opacity":"1"});
};