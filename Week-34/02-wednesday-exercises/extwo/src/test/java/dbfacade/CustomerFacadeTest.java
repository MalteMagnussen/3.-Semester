/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dbfacade;

import static dbfacade.CustomerFacadeImpl.getCustomerFacade;
import entity.Customer;
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

    private static CustomerFacade facade;
    private static EntityManagerFactory emf;
    private static EntityManager em;

    public CustomerFacadeTest() {
    }

    @BeforeClass
    public static void setUpClass() {
        emf = Persistence.createEntityManagerFactory("putest");
        em = emf.createEntityManager();
        facade = getCustomerFacade(emf);
//        Customer customer1 = new Customer("Hans", "Andersen");
        Customer customer2 = new Customer("Anders", "Hansen");

        try {
            em.getTransaction().begin();
//            em.persist(customer1);
            em.persist(customer2);
            em.getTransaction().commit();

//            System.out.println(customer1);
            System.out.println(customer2);
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
     * Test of findByID method, of class CustomerFacade.
     */
    @Test
    public void testFindByID() {
        System.out.println("findByID");
        // ARRANGE
        Long id = 1l;
        Customer expResult = new Customer("Anders", "Hansen");
        // ACT 
        Customer result = facade.findByID(id);
        // ASSERT
        assertEquals(expResult.getFirstName(), result.getFirstName());
    }

    /**
     * Test of findByLastName method, of class CustomerFacade.
     */
    @Test
    public void testFindByLastName() {
        System.out.println("findByLastName");
        // ARRANGE 
        String lastName = "Hansen";
        Customer expResult = new Customer("Anders", lastName);
        // ACT
        List<Customer> resultList = facade.findByLastName(lastName);
        Customer result = resultList.get(0);
        // ASSERT
        assertEquals(expResult.getFirstName(), result.getFirstName());
    }

    /**
     * Test of getNumberOfCustomers method, of class CustomerFacade.
     */
    @Test
    public void testGetNumberOfCustomers() {
        System.out.println("getNumberOfCustomers");
        // ARRANGE
        int expResult = 2;
        // ACT 
        int result = facade.getNumberOfCustomers();
        // ASSERT
        assertEquals(expResult, result);
    }

    /**
     * Test of allCustomers method, of class CustomerFacade.
     */
    @Test
    public void testAllCustomers() {
        System.out.println("allCustomers");
        // ARRANGE
        String firstName = "Anders";
//        String secondName = "Hans";
        // ACT
        List<Customer> customers = facade.allCustomers();
        // ASSERT
        assertEquals(firstName, customers.get(0).getFirstName());
//        assertEquals(secondName, customers.get(1).getFirstName());
    }

    /**
     * Test of addCustomer method, of class CustomerFacade.
     */
    @Test
    public void testAddCustomer() {
        System.out.println("addCustomer");
        // ARRANGE

        // ACT 
        Customer expResult = facade.addCustomer("Jens", "Jensen");
        // ASSERT
        assertEquals(2, expResult.getId().intValue());
    }

}
