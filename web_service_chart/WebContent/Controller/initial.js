var option = new Array();
var theme=["#007BC3", "#76B800", "#FFA500","#EF4C00","#A52A2A","#4682b4"];
option['fontSize']="13px";
 
function tooltipContentEditorByCate(str, seriesIndex, pointIndex, plot) {
    // display series_label, x-axis_tick, y-axis value
	//console.log(seriesIndex+"="+pointIndex);
	 $(".jqplot-highlighter-tooltip").css({"background":theme[pointIndex],"color":option['tooltipTextColor'],"opacity":"1","z-index":"12999"});
    return   plot.data[seriesIndex][pointIndex];
}

function tooltipContentEditor(str, seriesIndex, pointIndex, plot) {
    // display series_label, x-axis_tick, y-axis value
	//console.log(seriesIndex);
	 $(".jqplot-highlighter-tooltip").css({"background":theme[seriesIndex],"color":option['tooltipTextColor'],"opacity":"1","z-index":"12999"});
    return plot.series[seriesIndex]["label"] + ", " + plot.data[seriesIndex][pointIndex];
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
var getCate = function(paramUrl,pointIndex){
	var cateName="";
	$.ajax({
		url:paramUrl, 
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
			var cateArray= new Array();
			$.each(data,function(index,indexEntry){
				//alert(indexEntry[2]);
				
				cateArray[index]=indexEntry[0];
			});
			cateArrayUnique=cateArray.getUnique();
			cateName= cateArrayUnique[pointIndex];
		}
	 });
	return cateName;
};

var getSeries = function(paramUrl,seriesIndex){
	var seriesName="";
	$.ajax({
		url:paramUrl, 
		type:"get",
		dataType:"json",
		async:false,
		success:function(data){
				
				var seriesArray=new Array();
				$.each(data,function(index,indexEntry){

					seriesArray[index]=indexEntry[1];
				});
				seriesArrayUnique=seriesArray.getUnique();
				
			seriesName= seriesArrayUnique[seriesIndex];
			
		}
	 });
	return seriesName;
};