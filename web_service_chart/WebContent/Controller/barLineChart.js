var barLineChart=function(chartId,data,option){
	
	
	if(option['cateRotate']==""){
		option['cateRotate']=0;
	}
	
	//checkOption end
	Array.prototype.getUnique = function(){
		   var u = {}, a = [];
		   for(var i = 0, l = this.length; i < l; ++i){
		      if(u.hasOwnProperty(this[i])) {
		         continue;
		      }
		      a.push(this[i]);
		      u[this[i]] = 1;
		   }
		   return a;
		}
//Array Unigue end
	

	
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
		
		// {label:'Hotel'},
         //{label:'Event Regristration'},
        // {label:'Airfare'}
		// 
		//alert(seriesArrayUnique.length);
		series+="[";
		$.each(seriesArrayUnique,function(index,indexEntry){
			if(index==0){
				//{label:'Planned',renderer:$.jqplot.BarRenderer},
			series+="{label:'"+indexEntry+"'}";
			}else{
				
				if(index==seriesArrayUnique.length-1){
					
					series+=",{label:'"+indexEntry+",renderer:$.jqplot.BarRenderer'}";
				}else{
					series+=",{label:'"+indexEntry+"'}";
				}
			}
			
		});
		series+="]";
		
		
		/*
		var value="";
		value+="[[";
		var cateLength=cateArrayUnique.length-1;
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
		//check value is empty is set 0
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
		
	
	    
	    // Can specify a custom tick Array.
	    // Ticks should match up one for each y value (category) in the series.
		
	    var cate =cateArrayUnique;
	    var obValue=eval("("+value+")");
	    var obSeries=eval("("+series+")");
	    //alert(ticks);
	   // alert(obValue);
	    console.log(obSeries);
	    var Planned=seriesArrayUnique[0];
	    var Actual=seriesArrayUnique[1];
	    
	    
	/*
	Statace
	    var s1 = [4, 7, 9, 15];
	    var s2 = [12, 6, 19, 8];
	    var s3 = [[1, 40], [2, 13], [3, 54], [4, 47]];
	    var ticks = ['May', 'June', 'July','Agust'];

	    var plot2 = $.jqplot(chartId, [s1, s2,s3], {
	        stackSeries: true,
	        seriesDefaults: {
	            renderer: $.jqplot.BarRenderer,
	            rendererOptions: {
	                barMargin: 10
	            },
	            pointLabels: {
	                show: true,
	                stackedValue: true
	            }
	        },
	        series: [{},
	        {},
	                 { 
	                     disableStack : true,//otherwise it wil be added to values of previous series
	            renderer: $.jqplot.LineRenderer,
	            lineWidth: 2,
	            pointLabels: {
	                show: false
	            },
	            markerOptions: {
	                size: 5
	            }}],
	        axesDefaults: {
	            tickRenderer: $.jqplot.CanvasAxisTickRenderer,
	            tickOptions: {
	                angle: 30
	            }
	        },
	        axes: {
	            xaxis: {
	                renderer: $.jqplot.CategoryAxisRenderer,
	                ticks: ticks
	            },
	            yaxis: {
	                autoscale: true
	            }
	        }
	    });
	
	*/
	 /*
	var planned = [70000,90000,120000,100000,];
    var actual = [90000,80000,150000,120000];
    var trend = [75000, 85000, 140000, 110000];
    var xAxis = ['Jan', 'Feb', 'Mar', 'Apr'];
	*/
    
   
       // $.jqplot(chartId, [ planned,actual, trend], BarChart());
	    
	    if(seriesArrayUnique.length==2){
	    	$.jqplot(chartId, obValue, callBarChart());
	    }else if(seriesArrayUnique.length==3){
	    	$.jqplot(chartId, obValue, callBarChart2());
	    }
    	 
   
    	 
    	 function callBarChart()
    	    {
    	        var optionsObj = {
    	            title: option['title'],
    	            axes: {
    	                 xaxis: {
    	                    renderer: $.jqplot.CategoryAxisRenderer,
    	                    ticks: cate,
    	                    //pad: 1.5,
    	                },
    	                yaxis: {
    	                    tickOptions: { showMark: false, formatString: "%d" , formatter: $.jqplot.euroFormatter},
    	                    //pad: -2,
    	                },
    	            },
    	            axesDefaults: {
    	                tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
    	                tickOptions: {
    	                  angle: option['cateRotate'],
    	                  fontSize: '10pt',
    	                 
    	                }
    	            },
    	            seriesColors: option['theme'],

    	            series: [
    	                     
						
    	                    
    	               {label:Planned,renderer:$.jqplot.BarRenderer},
    	                //{label: 'Actual',renderer:$.jqplot.BarRenderer},
    	                {label: Actual}
    	                ],

    	            legend: {
    	                show: true,
    	                location: option['location'] ,
	                    placement :option['placement']
    	                },

    	            seriesDefaults:{
    	                shadow: false,
    	                rendererOptions:{
    	                   barPadding: 0,
    	                   barMargin: 10,
    	                   barWidth: option['barWidth'],
    	                      
    	               },
    	               pointLabels: { show: option['pointLabels'] },

    	            }, 
    	            highlighter:{
    		            show:true,
    		            tooltipContentEditor:tooltipContentEditor
    		        },
    	        };
    	        return optionsObj;
    	    }
    	 
    	 function callBarChart2()
 	    {
 	        var optionsObj = {
 	            title: option['title'],
 	            axes: {
 	                 xaxis: {
 	                    renderer: $.jqplot.CategoryAxisRenderer,
 	                    ticks: cate, 
 	                    //pad: 0,
 	                },
 	                yaxis: {
 	                    tickOptions: { showMark: false, formatString: "%d", formatter: $.jqplot.euroFormatter },                       
 	                },
 	            },
 	            axesDefaults: {
 	                tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
 	                tickOptions: {
 	                  angle: option['cateRotate'],
 	                  fontSize: option['fontSize']
 	                }
 	            },
 	            seriesColors: option['theme'],

 	            series: [  
 	                {label:seriesArrayUnique[0],renderer:$.jqplot.BarRenderer},
 	                {label: seriesArrayUnique[1],renderer:$.jqplot.BarRenderer},
 	                {label: seriesArrayUnique[2]}
 	                ],

 	            legend: {
 	                show: true,
 	                location: option['location'] ,
	                    placement :option['placement']
 	                },

 	            seriesDefaults:{
 	                shadow: false,
 	                rendererOptions:{
 	                   barPadding: 0,
 	                   barMargin: 10,
 	                   barWidth: option['barWidth'],
 	 	              
 	               },
 	              pointLabels: { show: option['pointLabels'] },

 	            }, 
 	            highlighter:{
 		            show:true,
 		            tooltipContentEditor:tooltipContentEditor
 		        },
 	        };
 	        return optionsObj;
 	        
 	    }
    	 
 	   // $(".jqplot-highlighter-tooltip").css({"background":option['theme'][0],"color":option['tooltipTextColor'],"opacity":"1"});
    
	//Example http://stackoverflow.com/questions/9775772/jqplot-show-trendline-over-barchart
    	 if(option['clickable']==true){
 		    
 		    $("#"+chartId).on('jqplotDataHighlight', function () {
 		    	   $('.jqplot-event-canvas').css( 'cursor', 'pointer' );
 		    	});
 	    }
    	 $("#"+chartId+">.jqplot-point-label").css({"font-size":option['pointLabelsFont']});
    	 $("#"+chartId+">.jqplot-highlighter-tooltip").css({"font-size":option['tooltipFontSize']});
	};
	
	
	