package rest.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.BankCustomer;
import facades.CustomerFacade;
import factories.EntityManagerFactoryFactory;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("customer")
public class BankCustomerResource {

    // Fields
    private EntityManagerFactory emf;
    private CustomerFacade facade;
    private Gson gson;

    // Constructor
    public BankCustomerResource() {
        emf = EntityManagerFactoryFactory.getFactory("DEVELOPMENT");
        facade = CustomerFacade.getFacade(emf);
        gson = new GsonBuilder().setPrettyPrinting().create();
    }

    /**
     * Get a customerDTO by id
     *
     * @param id of the Customer
     * @return CustomerDTO
     */
    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public String getCustomerDTO(@PathParam("id") int id) {
        return gson.toJson(facade.getCustomerDTOByID(id));
    }

    /**
     * Returns all Bank Customers. To be used internally, because it doesn't use
     * the DTO.
     *
     * @return BankCustomer
     */
    @GET
    @Path("/all")
    @Produces({MediaType.APPLICATION_JSON})
    public String getAll() {
        return gson.toJson(facade.getAllBankCustomers());
    }

    /**
     * Populates the server with some data Run this first
     */
    @GET
    @Path("/populate")
    public String populate() {
        EntityManager em = emf.createEntityManager();
        BankCustomer customer1 = new BankCustomer("Malte", "Magnussen", "10", 43000.44, 6, "Student");
        BankCustomer customer2 = new BankCustomer("Jens", "Forbryder", "1", 10.12, 55, "Hold ekstra øje");
        BankCustomer customer3 = new BankCustomer("Poul", "Pirat", "3", 723482.54, 33, "Hold ekstra øje");
        BankCustomer customer4 = new BankCustomer("Nikolaj", "Tyv", "4", 432.94, 54, "Hold ekstra øje");
        BankCustomer customer5 = new BankCustomer("Benny", "Røver", "5", 1.49, 78, "Hold ekstra øje");
        BankCustomer customer6 = new BankCustomer("Viktor", "Bandit", "6", 5432.4, 19, "Hold ekstra øje");

        try {
            em.getTransaction().begin();
            em.persist(customer1);
            em.persist(customer2);
            em.persist(customer3);
            em.persist(customer4);
            em.persist(customer5);
            em.persist(customer6);
            em.getTransaction().commit();

            System.out.println(customer1);
            System.out.println(customer2);
            System.out.println(customer3);
            System.out.println(customer4);
            System.out.println(customer5);
            System.out.println(customer6);
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return "Populated the Database successfully. Don't run this again.";
    }

    /*
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    public void create(BankCustomer entity) {
        throw new UnsupportedOperationException();
    }
    
    @PUT
    @Path("/{id}")
    @Consumes({MediaType.APPLICATION_JSON})
    public void update(BankCustomer entity, @PathParam("id") int id) {
        throw new UnsupportedOperationException();
    } */
}
