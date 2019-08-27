/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import dbfacade.CustomerFacade;
import static dbfacade.CustomerFacadeImpl.getCustomerFacade;
import entity.Customer;
import java.util.List;
import java.util.Random;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service EXERCISE 4 21-08-2019
 *
 * @author Malte
 */
@Path("customer")
public class CustomerResource {

    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    private CustomerFacade facade = getCustomerFacade(emf);

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CustomerResource
     */
    public CustomerResource() {
    }

    /**
     * Retrieves random customer as JSON
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public String getRandom() {
        Random rnd = new Random();
        List<Customer> customers = facade.allCustomers();
        return new Gson().toJson(customers.get(rnd.nextInt(customers.size())));
    }

    /**
     * Retrieves all customers as JSON
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        return new Gson().toJson(facade.allCustomers());
    }

    /**
     * Retrieves a customer by ID as JSON EXERCISE 4
     *
     * @param id
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getCustomer(@PathParam("id") int id) {
        return new Gson().toJson(facade.findByID(new Long(id)));
    }

}
