<%
String json="";

/*

"TH-XNE": 16.63,//North East
 "TH-XN": 11.58,//North
 "TH-XC": 158.97,//Central
 "TH-XS": 100//south
*/
//json+="[[\"TH-XNE\",16.63],[\"TH-XN\",11.58],[\"TH-XC\",158.97],[\"TH-XS\",100]]";
json+="[[\"TH-XNE\",16.63,\"red\"],[\"TH-XN\",11.58,\"yellow\"],[\"TH-XC\",158.97,\"green\"],[\"TH-XS\",100,\"blue\"]]";
out.println(json);
%>