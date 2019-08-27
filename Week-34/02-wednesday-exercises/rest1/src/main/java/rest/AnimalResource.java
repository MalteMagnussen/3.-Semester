/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import entities.Animal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Malte
 */
@Path("animal")
public class AnimalResource {
    
    private static List<Animal> animals = new ArrayList();
    {
        animals.add(new Animal(1994, "Dog", "Bark"));
        animals.add(new Animal(2090, "Duck", "Quack"));
        animals.add(new Animal(2018, "Kangaroo", "oi cunt, u wot m8"));
        animals.add(new Animal(2077, "Cow", "Moo"));
    }
    
    /**
     * Get a random animal.
     * @return an Animal
     */
    public Animal getRandomAnimal(){
        Random rnd = new Random();
        return animals.get(rnd.nextInt(animals.size()));
    }

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AnimalResource
     */
    public AnimalResource() {
    }

    /**
     * Retrieves representation of an instance of rest.AnimalResource
     * EXERCISE 1 - 21-08-2019
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/hello")
//    @Produces(MediaType.APPLICATION_JSON)
    public String getHello() {
        //TODO return proper representation object
        return "Hello from my first web service.";
    }
    
    /**
     * Retrieves representation of an instance of rest.AnimalResource
     * EXERCISE 2 - 21-08-2019
     * Content-Type: application/json
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/jsonhello")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        return "Hello from my first web service.";
    }
    
    /**
     * Retrieves representation of an instance of rest.AnimalResource
     * EXERCISE 3 - 21-08-2019
     * Content-Type: application/json
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/getRandomAnimal")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAnimal() {
        //TODO return proper representation object
        return new Gson().toJson(getRandomAnimal());
    }

    /**
     * PUT method for updating or creating an instance of AnimalResource
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
