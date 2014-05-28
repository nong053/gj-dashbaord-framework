<%
String json="";

json+="[[\"Jan\",\"Actual\",\"70000\"],[\"Feb\",\"Actual\",\"90000\"],[\"Mar\",\"Actual\",\"120000\"],[\"Apr\",\"Actual\",\"100000\"],";
json+="[\"Jan\",\"Planned\",\"80000\"],[\"Feb\",\"Planned\",\"100000\"],[\"Mar\",\"Planned\",\"140000\"],[\"Apr\",\"Planned\",\"150000\"],";
json+="[\"Jan\",\"Percentage\",\"20\"],[\"Feb\",\"Percentage\",\"40\"],[\"Mar\",\"Percentage\",\"60\"],[\"Apr\",\"Percentage\",\"90\"]]";

out.println(json);
%>