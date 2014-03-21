<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%
String json="";

/*
May	      Hotel	55
June	  Hotel	35
Junly	  Hotel	10
August	  Hotel	3
Octember  Hotel	36
May	Event Regristration	55
June	  Event Regristration	4
Junly	  Event Regristration	6
August	  Event Regristration	3
Octember  Event Regristration	36
May	      Airfare	55
June	  Airfare	4
Junly	  Airfare	6
August	  Airfare	3
Octember  Airfare	36
	
*/

json+="[[\"คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี\",\"Admission\",\"140\"],[\"คณะวิทยาศาสตร์\",\"Admission\",\"282\"],[\"คณะวิศวกรรมศาสตร์\",\"Admission\",\"517\"],[\"คณะสถาปัตยกรรมศาสตร์และการออกแบบ\",\"Admission\",\"15\"],[\"คณะเทคโนโลยีสารสนเทศ\",\"Admission\",\"39\"],";
json+="[\"คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี\",\"รับตรง \",\"859\"],[\"คณะวิทยาศาสตร์\",\"รับตรง \",\"255\"],[\"คณะวิศวกรรมศาสตร์\",\"รับตรง \",\"720\"],[\"คณะสถาปัตยกรรมศาสตร์และการออกแบบ\",\"รับตรง \",\"184\"],[\"คณะเทคโนโลยีสารสนเทศ\",\"รับตรง \",\"130\"],";
json+="[\"คณะวิทยาศาสตร์\",\"เข้าศึกษากรณีพิเศษ\",\"1\"]]";

/*
json+="[[\"May\",\"Hotel\",\"200\"],[\"June\",\"Hotel\",\"600\"],[\"Junly\",\"Hotel\",\"700\"],[\"Agust\",\"Hotel\",\"1000\"],[\"Octember\",\"Hotel\",\"1000\"],";
json+="[\"May\",\"Event Regristration\",\"400\"],[\"June\",\"Event Regristration\",\"210\"],[\"Junly\",\"Event Regristration\",\"690\"],[\"Agust\",\"Event Regristration\",\"820\"],[\"Octember\",\"Event Regristration\",\"820\"],";
json+="[\"May\",\"Airfare\",\"260\"],[\"June\",\"Airfare\",\"440\"],[\"Junly\",\"Airfare\",\"320\"],[\"Agust\",\"Airfare\",\"200\"],[\"Octember\",\"Airfare\",\"200\"]]";
*/


out.println(json);
%>