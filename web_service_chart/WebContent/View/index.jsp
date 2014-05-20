<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<style>
body{
font:Tahoma 13px;
}
</style>



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


<!--  library  chart start -->

<!--  library function chart start -->

<script type="text/javascript" src="../Controller/initial.js"></script> 
<script type="text/javascript" src="../Controller/barChart.js"></script> 
<script type="text/javascript" src="../Controller/barChartHorizontal.js"></script>
<script type="text/javascript" src="../Controller/donutChart.js"></script>
<script type="text/javascript" src="../Controller/lineChart.js"></script>
<script type="text/javascript" src="../Controller/pieChart.js"></script>
<script type="text/javascript" src="../Controller/barLineChart.js"></script>
<script type="text/javascript" src="../Controller/gaugeChart.js"></script>
<script type="text/javascript" src="../Controller/map.js"></script>
<script type="text/javascript" src="../Controller/table.js"></script>
<script type="text/javascript" src="../Controller/mainJs.js"></script>

<!--  library function chart end -->


<title>Test function Chart</title>

<title>Test function Chart</title>


</head>
<body>
<div style="height:250px;width:500px;"  id="chart" class="chart"></div><br>
<div style="height:250px;width:500px;"  id="chart2" class="chart"></div>

<br>
<button id="btnBarChart">btnBarChart</button>
<button id="btnBarChartMutiSeries">btnBarChartMutiSeries</button>
<button id="btnChartHorizontal">Horizontal</button>
<button id="btnChartHorizontalMutiSeries">barchartHorizontalMutiSeries</button>
<button id="btnChartHorizontalMutiSeriesStace">btnChartHorizontalMutiSeriesStace</button>

<button id="btnChartLine">btnChartLine</button>
<button id="btnDonut">Donut chart</button>
<button id="btnPie">Pie chart</button>
<button id="btnBarLineChart">BarLine chart</button>
<button id="btnBarLineChart2">BarLine chart2</button>

<button id="btngaugeChart">gaugeChart</button>
<button id="btnMapRegion">MapRegion</button>
<button id="btnMapProvince">MapProvince</button>
<button id="btnMapRegionByProvince">MapRegionByProvince</button>
<button id="btnMapWorld">MapWorld</button>
<button id="btnTable">Table</button>


</body>
</html>