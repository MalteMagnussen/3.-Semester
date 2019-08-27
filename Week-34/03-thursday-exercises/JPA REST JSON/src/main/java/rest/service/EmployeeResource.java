package rest.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.EmployeeDTO;
import entities.Employee;
import facades.EmployeeFacade;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Create the following endpoints using EmployeeDTO to wrap around the Employee
 * entities. /api/employee/all /api/employee/{id} /api/employee/highestpaid
 * /api/employee/name/{name}
 *
 * @author Malte
 */
@Path("employee")
public class EmployeeResource {

    public EmployeeResource() {
    }

    /**
     * Populates the server with some data Run this first
     */
    @GET
    @Path("/populate")
    public String populate() {
        EntityManager em = emf.createEntityManager();
        Employee e1 = new Employee("Malte", "Krogen", 10);
        Employee e2 = new Employee("Mads", "Vejlevej", 10);
        Employee e3 = new Employee("Jens", "Skolevej", 5);
        Employee e4 = new Employee("John", "Tennisbanen", 5);
        Employee e5 = new Employee("Frederik", "Fruerlund", 4);
        Employee e6 = new Employee("Lasse", "Holtevej", 3);

        try {
            em.getTransaction().begin();
            em.persist(e1);
            em.persist(e2);
            em.persist(e3);
            em.persist(e4);
            em.persist(e5);
            em.persist(e6);
            em.getTransaction().commit();

            System.out.println(e1);
            System.out.println(e2);
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return "Populated the Database successfully. Don't run this again.";
    }

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    EmployeeFacade facade = EmployeeFacade.getFacade(emf);
    Gson gson = new GsonBuilder().setPrettyPrinting().create();

    /**
     * Retrieves all Employees as JSON
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAll() {
        List<Employee> employees = facade.getAllEmployees();
        List<EmployeeDTO> employeeDTO = new ArrayList<>();
        for (Employee e : employees) {
            employeeDTO.add(new EmployeeDTO(e));
        }
        return gson.toJson(employeeDTO);
    }

    /**
     * Retrieves an Employee by ID as JSON
     *
     * @param id of the Employee
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getEmployee(@PathParam("id") Long id) {
        return gson.toJson(new EmployeeDTO(facade.getEmployeeById(id)));
    }

    /**
     * Retrieves highest paid employee as JSON
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/highestpaid")
    @Produces(MediaType.APPLICATION_JSON)
    public String getHighestPaid() {
        List<Employee> employees = facade.getEmployeesWithHighestSalary();
        List<EmployeeDTO> employeeDTO = new ArrayList<>();
        for (Employee e : employees) {
            employeeDTO.add(new EmployeeDTO(e));
        }
        return gson.toJson(employeeDTO);
    }

    /**
     * Retrieves Employees by name as JSON
     *
     * @param name of the Employees
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/name/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getEmployeeByName(@PathParam("name") String name) {
        List<Employee> employees = facade.getEmployeesByName(name);
        List<EmployeeDTO> employeeDTO = new ArrayList<>();
        for (Employee e : employees) {
            employeeDTO.add(new EmployeeDTO(e));
        }
        return gson.toJson(employeeDTO);
    }

}
