/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.CustomerDTO;
import entities.BankCustomer;
import factories.EntityManagerFactoryFactory;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Malte
 */
public class CustomerFacadeTest {

    private static EntityManagerFactory emf;
    private static EntityManager em;
    private static CustomerFacade instance;
    private static List<BankCustomer> customers;
    private static BankCustomer malte;

    public CustomerFacadeTest() {
    }

    /* Preparing the test database, so we have the same state for every test */
    @BeforeClass
    public static void setUpClass() {
        malte = new BankCustomer("Malte", "Magnussen", "10", 43000.44, 6, "Student");
        malte.setId(1L);

        emf = EntityManagerFactoryFactory.getFactory("TEST");
        em = emf.createEntityManager();
        instance = CustomerFacade.getFacade(emf);

        // Taken from the list I made in entity.MakeTestData.java so I didn't have to rewrite testdata. 
        customers = new ArrayList<>();
        customers.add(new BankCustomer("Malte", "Magnussen", "10", 43000.44, 6, "Student"));
        customers.add(new BankCustomer("Jens", "Forbryder", "1", 10.12, 55, "Hold ekstra øje"));
        customers.add(new BankCustomer("Poul", "Pirat", "3", 723482.54, 33, "Hold ekstra øje"));
        customers.add(new BankCustomer("Nikolaj", "Tyv", "4", 432.94, 54, "Hold ekstra øje"));
        customers.add(new BankCustomer("Benny", "Røver", "5", 1.49, 78, "Hold ekstra øje"));
        customers.add(new BankCustomer("Viktor", "Bandit", "6", 5432.4, 19, "Hold ekstra øje"));

        try {

            // Persisting the customers in a loop. 
            // That way, I know that they are in the database in the order I want them to every time. 
            for (BankCustomer customer : customers) {
                em.getTransaction().begin();
                em.persist(customer);
                em.getTransaction().commit();
                System.out.println(customer);
            }

        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of getCustomerDTOByID method, of class CustomerFacade.
     */
    @Test
    public void testGetCustomerByID() {
        System.out.println("getCustomerByID");
        // Arrange
        int id = 1;
        CustomerDTO expResult = new CustomerDTO(malte);
        // Act
        CustomerDTO result = instance.getCustomerDTOByID(id);
        // Assert
        assertEquals(expResult, result);
    }

    /**
     * Test of getCustomerDTOByLastName method, of class CustomerFacade.
     */
    @Test
    public void testGetCustomerByLastName() {
        System.out.println("getCustomerByName");
        // Arrange
        String name = "Magnussen";
        List<CustomerDTO> expResult = new ArrayList<>();
        expResult.add(new CustomerDTO(malte));
        // Act
        List<CustomerDTO> result = instance.getCustomerDTOByLastName(name);
        // Assert
        assertEquals(expResult, result);
    }

    /**
     * Test of addCustomer method, of class CustomerFacade.
     */
    @Test
    public void testAddCustomer() {
        System.out.println("addCustomer");
        // Arrange
        BankCustomer cust = new BankCustomer("Poul", "Madsen", "10", 10.00, 10, "10");
        BankCustomer expResult = cust;
        // Act
        BankCustomer result = instance.addCustomer(cust);
        // Assert
        assertEquals(expResult, result);
        // Removing the user again so it doesn't mess up the other tests.
        try {
            em = emf.createEntityManager();
            em.getTransaction().begin();
            // em.find finds an entity based on primary key
            // em.find(Entity.class, Primary Key);
            em.remove(em.find(BankCustomer.class, new Long(customers.size() + 1)));
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    /**
     * Test of getAllBankCustomers method, of class CustomerFacade.
     */
    @Test
    public void testGetAllBankCustomers() {
        System.out.println("getAllBankCustomers");
        // Arrange
        List<BankCustomer> expResult = customers;
        // Act
        List<BankCustomer> result = instance.getAllBankCustomers();
        // Assert
        assertEquals(expResult, result);
    }

}
