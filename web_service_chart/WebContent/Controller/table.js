/*
var table=function(tableId,data){
	//alert("Create Table");
	var htmlTable="";
	htmlTable+="<table id=\"table"+tableId+"\">";
	$.each(data,function(index,indexEntry){
		if(index==0){
			htmlTable+="<thead>";
			htmlTable+="<tr class=\"active\">";
			for(var i=0;i<indexEntry.length;i++){
				if(indexEntry[i]==0){
				htmlTable+="<th width=\"300\"><b>"+indexEntry[i]+"</b></th>";	
				}else{
				htmlTable+="<th><b>"+indexEntry[i]+"</b></th>";
				}
			}
			htmlTable+="</tr>";
			htmlTable+="</thead>";
			htmlTable+="<tbody>";
			
		}else{
			
			htmlTable+="<tr>";
			for(var i=0;i<indexEntry.length;i++){
				htmlTable+="<td>"+indexEntry[i]+"</td>";
			}
			htmlTable+="</tr>";
			
		}

	});
	htmlTable+="</tbody>";
	htmlTable+="</table>";

	//console.log(data); 
	//alert(htmlTable);
	$("#"+tableId).html(htmlTable);
	$("#table"+tableId).kendoGrid();
};
*/

var table=function(tableId,data,option){
	//alert("Create Table");
	var htmlTable="";
	htmlTable+="<table id=\"table"+tableId+"\">";
	htmlTable+="<colgroup>";
    for(var i=0;i<option['colsWidth'].length;i++){
    	htmlTable+="<col style=\"width:"+option['colsWidth'][i]+"\" />";
	}
    htmlTable+="</colgroup>";
    
	htmlTable+="<thead>";
	for(var i=0;i<option['title'].length;i++){
		
		htmlTable+="<th data-field=column"+i+"><b>"+option['title'][i]+"</b></th>";
		
	}
	htmlTable+="</thead>";
	htmlTable+="<body>";
	$.each(data,function(index,indexEntry){
		
			
			htmlTable+="<tr>";
			for(var i=0;i<indexEntry.length;i++){
				htmlTable+="<td>"+indexEntry[i]+"</td>";
			}
			htmlTable+="</tr>";
			
		

	});
	htmlTable+="</tbody>";
	htmlTable+="</table>";

	//console.log(data); 
	//alert(htmlTable);
	$("#"+tableId).html(htmlTable);
    $("#table"+tableId).kendoGrid({
        height: option['height'],
        sortable: true
    });
    
	$(".k-grid td").css({"padding":"0px","padding-left":"2px"});
	
};