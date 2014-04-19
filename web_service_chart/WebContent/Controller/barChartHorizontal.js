var barChartHorizontal = function(chartId,data,option){
	
	
	var cateArray= new Array();
	var cateArrayUnique= new Array();
	var seriesArray=new Array();
	var seriesArrayUnique=new Array();
	var series="";
	
	
	$.each(data,function(index,indexEntry){
		//alert(indexEntry[2]);
		
		cateArray[index]=indexEntry[0];
		seriesArray[index]=indexEntry[1];
		
		
		
	});
	cateArrayUnique=cateArray.getUnique();
	seriesArrayUnique=seriesArray.getUnique();
	
	//
	/*
	 {label:'Hotel'},
     {label:'Event Regristration'},
     {label:'Airfare'}
	 */
	series+="[";
	$.each(seriesArrayUnique,function(index,indexEntry){
		if(index==0){
		series+="{label:'"+indexEntry+"'}";
		}else{
		series+=",{label:'"+indexEntry+"'}";
		}
		
	});
	series+="]";
	
	

	var cateLength=cateArrayUnique.length-1;
	
	var slotArray= new Array();//get array all
	var slotArray2= new Array();//get array for data is not empty
	
	for(var i=0;i<seriesArrayUnique.length;i++){
		
		
		slotArray[i] = new Array();
		slotArray2[i] = new Array();
		
		
		for(var j=0;j<cateArrayUnique.length;j++){
			slotArray[i][j]=cateArrayUnique[j];
			//alert(cateArrayUnique[j]);
			
			$.each(data,function(index,indexEntry){
				if((cateArrayUnique[j]==indexEntry[0])&&(seriesArrayUnique[i]==indexEntry[1])){
					//alert(cateArrayUnique[j]+"-"+indexEntry[2]);
					slotArray2[i][j]=indexEntry[2];

				}
				
			});

		}
		
		
	}

	var value="";
	value+="[[";
	var checkUndefinedValue=0;
	//manage import data value  and check undefined value
	for(var i=0;i<slotArray.length;i++){
				//alert(slotArray[i]);
			for(var j=0;j<slotArray[i].length;j++){
				if(slotArray2[i][j]==undefined){
					checkUndefinedValue=0; 
				}else{
					checkUndefinedValue=slotArray2[i][j];
				}

				
				if(i==0){
					if(j==0){
					value+=+checkUndefinedValue;
					}else{
					value+=","+checkUndefinedValue;	
					}
				}else{
					if(cateLength==cateArrayUnique.length-1){
						value+=",["+checkUndefinedValue;
					}else{
						value+=","+checkUndefinedValue;
					}
					
				}
				
				if(cateLength==0){
					value+="]";
					cateLength=cateArrayUnique.length;
				}
				cateLength--;
				
				
			}
		
	}
	value+="]";
	
	//alert(value);
	
	/*
		$.each(data,function(index,indexEntry){
			
				if(index==0){
					value+=indexEntry[2];
				}else{
					if(cateLength==cateArrayUnique.length-1){
						value+=",["+indexEntry[2];
					}else{
						value+=","+indexEntry[2];
					}
					
				}
				
				if(cateLength==0){
					value+="]";
					cateLength=cateArrayUnique.length;
				}
				cateLength--;
				
				
				
		});
		
		value+="]";
		*/
		//alert(cateArrayUnique);
		//alert(value);
		//alert(series);
	

    
    // Can specify a custom tick Array.
    // Ticks should match up one for each y value (category) in the series.
		
    var ticks =cateArrayUnique;
    var obValue=eval("("+value+")");
    var obSeries=eval("("+series+")");
	
	
	

	        //var ticks = ['A', 'B', 'C', 'D', 'E'];

	        plot4 = $.jqplot(chartId, obValue, {
	            animate: true,
	            stackSeries: option['stackSeries'],
	            captureRightClick: true,
	            title: option['title'],
	            seriesColors: option['theme'],
	            seriesDefaults: {
	                renderer: $.jqplot.BarRenderer,
	                shadowAngle: 135,
	                rendererOptions: {
	                    barDirection: 'horizontal',
	                    highlightMouseDown: true,
	                    barWidth: option['barWidth']
	                },
	                pointLabels: {
	                    show: true,
	                    formatString: '%d',
	                    hideZeros: true
	                }
	            },
	            series:obSeries,
    	        legend: {
    	            show: true,
    	            location: option['location'] ,
                    placement :option['placement']
    	        },
	            axes: {
	                xaxis: {
	                    renderer: $.jqplot.LogAxisRenderer,
	                    showTicks: false,
	                    drawMajorGridlines: false,
	                    pad: 0,
	                },
	                yaxis: {
	                    renderer: $.jqplot.CategoryAxisRenderer,
	                    rendererOptions: {
	                        tickRenderer: $.jqplot.AxisTickRenderer,
	                        tickOptions: {
	                            mark: null,
	                            angle: option['cateRotate'],
	                            fontSize: option['fontSize']
	                        }
	                    },
	                    ticks: ticks
	                }
	            },
	            
		        highlighter:{
		            show:true,
		            tooltipContentEditor:tooltipContentEditor
		        },
	        });
	        //$(".jqplot-highlighter-tooltip").css({"background":option['theme'][0],"color":option['tooltipTextColor'],"opacity":"1"});
	        
	};