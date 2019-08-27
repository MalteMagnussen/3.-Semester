/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Student;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author thomas
 */
@Path("student")
public class StudentResource {
    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private static List<Student> students = new ArrayList();
    {
    students.add(new Student(1, "Hanne", "A"));
    students.add(new Student(2, "Hassan", "A"));
    students.add(new Student(3, "Helge", "A"));
    students.add(new Student(4, "Ho", "B"));
    }
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of StudentResource
     */
    public StudentResource() {
    }

    /**
     * Retrieves representation of an instance of rest.StudentResource
     * @return an instance of java.lang.String
     */
    @GET
//    @Produces(MediaType.APPLICATION_JSON)
    public String getString() {
        //TODO return proper representation object
        return "hej fra web servicen";
    }
    @GET
    @Path("/test")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        System.out.println("TTTTTTTTTTTTTTTTTTTTTTESTTTTTTTTTTTTTTTTTTT");
        return "{\"msg\":\"test\"}";
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getStudent(@PathParam("id") int id) {
        return Response.ok().entity(gson.toJson(students)).build();
    }
    
}
