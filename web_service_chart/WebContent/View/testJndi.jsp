<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
  <head>
    <title>DB Test</title>
  </head>
  <body>

  <%
  	com.goingjesse.chart.service.connectionJNDI jndi = new com.goingjesse.chart.service.connectionJNDI();
         
    	  //String query="SELECT current date FROM sysibm.sysdummy1";
    	  String query="SELECT * from ADMIN_CONFIG";    	  
    	  String columns="1,2,3";
    	  
          jndi.selectByIndexDwh(query, columns);
      
          out.println(jndi.getData());
  %>


 

  </body>
</html>