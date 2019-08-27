<%-- 
    Document   : table
    Created on : Aug 27, 2019, 7:15:10 PM
    Author     : Malte
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <base href="${pageContext.request.contextPath}/" />
        <!-- meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fog Carport</title>

        <!--The following tag is the JSTL Expression Language tag-->
        <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

        <!-- Insert bootstrap CSS - integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" -->
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">

    </head>
    <body>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th scope="col">HEADER</th>
                    <th scope="col">VALUE</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Host</td>
                    <td>@mdo</td>
                </tr>
                <tr>    
                    <td>connection</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>cache-control</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>accept</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>user-agent</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>accept-encoding</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>accept-language</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </table>

        <!-- JQUERY JS -->
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" crossorigin="anonymous"></script>
        <!-- BOOTSTRAP JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    </body>
</html>
