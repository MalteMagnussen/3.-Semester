<%-- 
    Document   : dynamicFetch
    Created on : Sep 5, 2019, 8:29:47 PM
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

        <!-- My CSS 
        <link href="css/calculator.css" rel="stylesheet">
        -->

        <!-- Insert bootstrap CSS - integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

    </head>
    <body>
        <div class="container">

            <input type="number" id="personId"><button id="submitButton" class="btn-primary">Get User</button><button id="allButton" class="btn-primary">Get All</button>

            <pre id="printPerson">
                
            </pre>

        </div>


        <!-- JQUERY JS -->
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" crossorigin="anonymous"></script>
        <!-- BOOTSTRAP JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>

        <!-- My own custom JavaScript -->
        <script src="JavaScript/dynamicFetchJS.js"></script>
        <script src="JavaScript/tableHelper.js"></script>
    </body>
</html>

