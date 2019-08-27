<%-- 
    Document   : table
    Created on : Aug 27, 2019, 7:15:10 PM
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
        <title>5) Get HTTP Request Headers on the Server</title>

        <!--The following tag is the JSTL Expression Language tag-->
        <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

        <!-- Insert bootstrap CSS - integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

    </head>
    <body>

        <div class="d-flex justify-content-center">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">HEADER</th>
                        <th scope="col">VALUE</th>
                    </tr>
                </thead>
                <tbody>

                    <c:forEach items="${headers}" var="map">
                        <c:forEach items="${map}" var="entry">
                            <tr>
                                <td>${entry.key}</td>
                                <td>${entry.value}</td>
                            </tr>
                        </c:forEach>
                    </c:forEach>

                </tbody>
            </table>
        </div>
        <!-- JQUERY JS -->
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" crossorigin="anonymous"></script>
        <!-- BOOTSTRAP JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    </body>
</html>
