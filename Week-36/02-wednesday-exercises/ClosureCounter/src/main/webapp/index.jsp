<%-- 
    Document   : index
    Created on : Sep 4, 2019, 5:58:56 PM
    Author     : Malte
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <!-- meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Malte Magnussen</title>

        <!--The following tag is the JSTL Expression Language tag-->
        <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

        <!-- Insert bootstrap CSS - integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

        <<!-- Background stylesheet -->
        <link href="css/BackgroundImage.css" rel="stylesheet" type="text/css"/>

    </head>
    <body>
        <button onclick="test1()">Count counter1</button>
        <span id="c1"></span>
        <button onclick="test2()" >Count counter2</button>
        <span id="c2"></span>

        <script>
            function test1() {
                counter1.increment();
                $("#c1").html(counter1.value());
            }
            function test2() {
                counter2.increment();
                $("#c2").html(counter2.value());
            }
        </script>
        <script src="JavaScript/counterModule.js"></script>
        <!-- JQUERY JS -->
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" crossorigin="anonymous"></script>
        <!-- BOOTSTRAP JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    </body>
</html>
