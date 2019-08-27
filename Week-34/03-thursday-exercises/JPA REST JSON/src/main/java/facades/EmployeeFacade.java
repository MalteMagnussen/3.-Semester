package facades;

import entities.Employee;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 * Create an Employee facade class that can: getEmployeeById getEmployeesByName
 * getAllEmployees getEmployeesWithHighestSalary createEmployee
 */
/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class EmployeeFacade {

    private static EmployeeFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private EmployeeFacade() {
    }

    /**
     * Get Facade
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static EmployeeFacade getFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new EmployeeFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    /**
     * Get a single Employee by his ID.
     *
     * @param id of the Employee.
     * @return Employee Object
     */
    public Employee getEmployeeById(Long id) {
        EntityManager em = getEntityManager();
        try {
            Employee employee = em.find(Employee.class, id);
            return employee;
        } finally {
            em.close();
        }
    }

    /**
     * Get all Employees with a given name.
     *
     * @param name of the Employee/Employees.
     * @return A List of all Employees with that name.
     */
    public List<Employee> getEmployeesByName(String name) {
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Employee> query
                    = em.createQuery("Select e FROM Employee e WHERE e.name = :name", Employee.class)
                            .setParameter("name", name);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    /**
     * Get a list of all employees.
     *
     * @return List of all Employees.
     */
    public List<Employee> getAllEmployees() {
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Employee> query
                    = em.createQuery("SELECT e FROM Employee e", Employee.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    /**
     * Returns a list of all the employees who have the highest salary.
     *
     * @return List of Employees
     */
    public List<Employee> getEmployeesWithHighestSalary() {
        EntityManager em = getEntityManager();
        try {
            TypedQuery<Employee> query
                    = em.createQuery("SELECT e FROM Employee e WHERE e.salary = (SELECT MAX(z.salary) FROM Employee z)", Employee.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    /**
     * Put a Employee into the DB.
     *
     * @param name of the Employee
     * @param address of the Employee
     * @param salary of the Employee
     * @return Employee with its ID
     */
    public Employee createEmployee(String name, String address, int salary) {
        EntityManager em = getEntityManager();
        try {
            Employee employee = new Employee(name, address, salary);
            em.getTransaction().begin();
            em.persist(employee);
            em.getTransaction().commit();
            return employee;
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return null; 
    }

}
