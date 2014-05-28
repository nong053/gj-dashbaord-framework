<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>


<!-- main library start-->

<script src="../libraryChart/jqplot/jquery.js"></script>
<script src="../libraryChart/jqplot/jquery.jqplot.min.js" type="text/javascript" language="javascript"></script>
<link href="../libraryChart/jqplot/jquery.jqplot.min.css" type="text/css" rel="stylesheet"/>
<link href="../libraryChart/jquery-jvectormap/jquery-jvectormap-1.2.2.css" type="text/css" rel="stylesheet"/>
<script src="../libraryChart/jquery-jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="../libraryChart/bootsrap/js/bootstrap.min.js"></script>

<link href="../libraryChart/kendoCommercial/styles/kendo.common.min.css" rel="stylesheet" />
<link href="../libraryChart/kendoCommercial/styles/kendo.default.min.css" rel="stylesheet" />
<script src="../libraryChart/kendoCommercial/js/kendo.all.min.js"></script>
<!-- <link href="../libraryChart/bootsrap/css/bootstrap.min.css" type="text/css" rel="stylesheet"/>
<link href="../libraryChart/bootsrap/css/bootstrap-theme.min.css" type="text/css" rel="stylesheet"/>-->


<!-- main library end-->
<!--  library  chart start -->

<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.barRenderer.min.js" type="text/javascript" language="javascript"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.categoryAxisRenderer.min.js" type="text/javascript" language="javascript"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.pointLabels.min.js" type="text/javascript" language="javascript"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.pieRenderer.min.js"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.donutRenderer.min.js"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.euroFormatter.js"></script>

<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.meterGaugeRenderer.min.js"></script>
<script type="text/javascript" src="../libraryChart/jquery-jvectormap/jquery-jvectormap-th_regions-mill-en.js"></script>
<script type="text/javascript" src="../libraryChart/jquery-jvectormap/jquery-jvectormap-th-mill-th.js"></script>
<script type="text/javascript" src="../libraryChart/jquery-jvectormap/jquery-jvectormap-th-region-mill-th.js"></script>
<script type="text/javascript" src="../libraryChart/jquery-jvectormap/jquery-jvectormap-world-mill-en.js"></script>

<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.canvasAxisTickRenderer.min.js"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.canvasTextRenderer.min.js"></script>
<script type="text/javascript" src="../libraryChart/jqplot/plugins/jqplot.highlighter.js"></script>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<script>
$(document).ready(function(){
    var line1=[['11-01-2011',2052], ['11-02-2011',2205], ['11-03-2011',1910], ['11-04-2011',2085], ['11-05-2011',2261],  ['11-06-2011',1714],  ['11-07-2011',3123]];
    var line2=[['11-01-2011',2121], ['11-02-2011',32323],['11-03-2011',65656],['11-04-  11',21212],['11-05-2011',32323], ['11-06-2011',54544], ['11-07-2011',31230]];

    $.jqplot.config.enablePlugins = true;

    var plot1 = $.jqplot('chart1', [line1, line2], {
      title:'Margin vs Date',
      axes:{
          xaxis:{
              renderer:$.jqplot.DateAxisRenderer            
          },
          yaxis:{  
            autoscale:true,
            label: "hello"
          },  
          y2axis:{
            autoscale:true, 
            tickOptions:{showGridline:false},
            label: "Hi"
          }

      },
      series:[{lineWidth:4}, {yaxis:'y2axis'}]
    });
  });
  
</script>
</head>
<body>
	<div id="chart1"></div>
</body>
</html>