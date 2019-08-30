<%-- 
    Document   : index
    Created on : Aug 30, 2019, 3:47:17 PM
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


        <!-- Page Content -->
        <div class="container">
            <div class="card border-0 shadow my-5">
                <div class="card-body p-5">
                    
                    <h1 class="font-weight-light">Malte Hviid-Magnussen</h1>
                    <!-- Review Links -->
                    <div class="float-left">
                        <h2 class="font-weight-light">Review Links</h2>
                        <div class="btn-group-vertical">
                            <a class="btn btn-dark" href="https://github.com/MalteMagnussen/3.-Semester/wiki/Week-35" role="button">Week 35</a>
                            <a class="btn btn-dark" href="https://github.com/MalteMagnussen/3.-Semester/wiki/Week-34" role="button">Week 34</a>
                        </div>
                    </div>



                    <!-- My GitHub -->
                    <div class="float-right">
                        <h4 class="font-weight-light">My GitHub</h4>
                        <div class="card border-0 shadow">
                            
                            <a href="https://github.com/MalteMagnussen">
                                
                                <img src="https://i.imgur.com/qaDtYoL.png?1">
                                
                            </a>
                        </div>
                    </div>


                    <div style="height: 700px"></div>
                </div>
            </div>

        </div>


        <!-- JQUERY JS -->
        <script src="https://code.jquery.com/jquery-3.4.0.min.js" crossorigin="anonymous"></script>
        <!-- BOOTSTRAP JS -->
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    </body>
</html>
