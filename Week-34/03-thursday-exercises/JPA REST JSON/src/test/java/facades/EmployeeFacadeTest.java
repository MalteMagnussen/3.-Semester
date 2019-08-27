/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Employee;
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
public class EmployeeFacadeTest {
    
    private static EntityManagerFactory emf;
    private static EntityManager em;
    private static EmployeeFacade instance;
    private static List<Employee> employees;
    private static Employee malte;
        
    /* Preparing the test database, so we have the same state for every test */
    @BeforeClass
    public static void setUpClass() {
        malte = new Employee("Malte", "Magnussenvej", 6);
        malte.setId(1L);
        
        emf = Persistence.createEntityManagerFactory("puTest"); // "puTest" is my test database. Look in persistence.xml for more info. 
        em = emf.createEntityManager();
        instance = EmployeeFacade.getFacade(emf);
        
        employees = new ArrayList<>();
        employees.add(new Employee("Malte", "Magnussenvej", 6));
        employees.add(new Employee("Jens", "Forbrydervej", 5));
        employees.add(new Employee("Poul", "Piratvej", 5));
        employees.add(new Employee("Nikolaj", "Tyvvej", 7));
        employees.add(new Employee("Benny", "Røvervej", 9));
        employees.add(new Employee("Viktor", "Banditvej", 9));
        
        try {

            for (Employee employee : employees) {
                em.getTransaction().begin();
                em.persist(employee);
                em.getTransaction().commit();
                System.out.println(employee);
            }

        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }
    
    public EmployeeFacadeTest() {
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
     * Test of getEmployeeById method, of class EmployeeFacade.
     */
    @Test
    public void testGetEmployeeById() {
        System.out.println("getEmployeeById");
        // Arrange
        Long id = 1L;
        Employee expResult = malte;
        // Act
        Employee result = instance.getEmployeeById(id);
        // Assert
        assertEquals(expResult, result);
    }

    /**
     * Test of getEmployeesByName method, of class EmployeeFacade.
     */
    @Test
    public void testGetEmployeesByName() {
        System.out.println("getEmployeesByName");
        // Arrange
        String name = "Malte";
        List<Employee> expResult = new ArrayList<>();
        expResult.add(malte);
        // Act
        List<Employee> result = instance.getEmployeesByName(name);
        // Assert
        assertEquals(expResult, result);
    }

    /**
     * Test of getAllEmployees method, of class EmployeeFacade.
     */
    @Test
    public void testGetAllEmployees() {
        System.out.println("getAllEmployees");
        // Arrange
        List<Employee> expResult = employees;
        // Act
        List<Employee> result = instance.getAllEmployees();
        // Assert
        assertEquals(expResult, result);
    }

    /**
     * Test of getEmployeesWithHighestSalary method, of class EmployeeFacade.
     */
    @Test
    public void testGetEmployeesWithHighestSalary() {
        System.out.println("getEmployeesWithHighestSalary");
        // Arrange
        List<Employee> expResult = new ArrayList<>();
        expResult.add(new Employee("Benny", "Røvervej", 9));
        expResult.add(new Employee("Viktor", "Banditvej", 9));
        // Act
        List<Employee> result = instance.getEmployeesWithHighestSalary();
        // Assert
        assertEquals(expResult, result);
    }

    /**
     * Test of createEmployee method, of class EmployeeFacade.
     */
    @Test
    public void testCreateEmployee() {
        System.out.println("createEmployee");
        // Arrange
        String name = "Malte";
        String address = "Magnussenvej";
        int salary = 6;
        Employee expResult = malte;
        // Act
        Employee result = instance.createEmployee(name, address, salary);
        // Assert
        assertEquals(expResult, result);
        // Removing the entity again, so it doesn't mess with the other tests. 
        try {
            em = emf.createEntityManager();
            em.getTransaction().begin();
            // em.find finds an entity based on primary key
            // em.find(Entity.class, Primary Key);
            em.remove(em.find(Employee.class, new Long(employees.size() + 1)));
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }
    
}
