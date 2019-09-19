package facades;

import utils.EMF_Creator;
import entities.Person;
import exceptions.MissingInputException;
import exceptions.PersonNotFoundException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import utils.EMF_Creator.DbSelector;
import utils.EMF_Creator.Strategy;

public class IPersonFacadeTest {

    private static EntityManagerFactory emf;
    private static PersonFacade facade;
    private Person person;
    private List<Person> people;

    public IPersonFacadeTest() {
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(DbSelector.TEST, Strategy.DROP_AND_CREATE);
        facade = PersonFacade.getPersonFacade(emf);
    }

    @AfterAll
    public static void tearDownClass() {
    }

    @BeforeEach
    public void setUp() {
        people = new ArrayList<>();
        person = new Person("Malte", "Magnussen", "42301207");

        people.add(person);
        people.add(new Person("Jens", "Laigaard", "98765432"));
        people.add(new Person("August", "Enevoldsen", "12345678"));

        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            Query query = em.createNativeQuery("truncate table jaxrs_test.PERSON;");
            query.executeUpdate();
            em.getTransaction().commit();

            for (Person p : people) {
                em.getTransaction().begin();
                em.persist(p);
                em.getTransaction().commit();
            }
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
    }

    @Test
    public void addPersonTest() throws MissingInputException {
        System.out.println("Add Person Test - Facade");
        // Arrange
        Person expResult = new Person("Martin", "Smith", "123");
        // Act
        Person result = facade.addPerson("Martin", "Smith", "123");
        // Assert
        assertNotNull(result);
        assertEquals(expResult, result);
    }

    @Test
    public void addPersonWrongTest() {
        System.out.println("Add Person Wrong Input Test - Facade");
        // Arrange
        Throwable expResult = new MissingInputException("First Name and/or Last Name is missing");
        // Act
        Throwable result = assertThrows(MissingInputException.class, () -> {
            facade.addPerson(null, null, null);
        });
        // Assert
        assertNotNull(result);
        assertEquals(expResult.getCause(), result.getCause());
    }

    @Test
    public void getPersonTest() throws PersonNotFoundException {
        System.out.println("Get Person Test - Facade");
        // Arrange
        Person expResult = person;
        // Act
        Person result = facade.getPerson(1);
        // Assert
        assertNotNull(result);
        assertEquals(expResult, result);
    }

    @Test
    public void getWrongPersonTest() {
        System.out.println("Get Person by Wrong ID Test - Facade");
        // Arrange
        Throwable expResult = new PersonNotFoundException("No Person persisted with that ID.");
        // Act
        Throwable result = assertThrows(PersonNotFoundException.class, () -> {
            facade.getPerson(232);
        });
        // Assert
        assertNotNull(result);
        assertEquals(expResult.getCause(), result.getCause());
    }

    @Test
    public void getAllPersonsTest() {
        System.out.println("Get All Persons Test - Facade");
        // Arrange
        List<Person> expResult = people;
        // Act
        List<Person> result = facade.getAllPersons();
        // Assert
        assertNotNull(result);
        assertEquals(expResult, result);
    }

    @Test
    public void editPersonTest() throws MissingInputException {
        System.out.println("Edit Person Test - Facade");
        // Arrange
        Person expResult = person;
        expResult.setFirstName("Magnus");
        // Act
        Person result = facade.editPerson(expResult);
        // Assert
        assertNotNull(result);
        assertEquals(expResult, result);
    }

    @Test
    public void editPersonTestWrong() {
        System.out.println("Edit Person Wrong Test - Facade");
        // Arrange
        Person editPerson = person;
        editPerson.setFirstName("");
        editPerson.setLastName("");
        Throwable expResult = new MissingInputException("First Name and/or Last Name is missing");
        // Act
        Throwable result = assertThrows(MissingInputException.class, () -> {
            facade.editPerson(editPerson);
        });
        // Assert
        assertNotNull(result);
        assertEquals(expResult.getCause(), result.getCause());
    }

    @Test
    public void deletePersonTestWrong() {
        System.out.println("Delete Person Wrong Test - Facade");
        // Arrange
        Throwable expResult = new PersonNotFoundException("Could not delete, provided id does not exist");
        // Act
        Throwable result = assertThrows(PersonNotFoundException.class, () -> {
            facade.deletePerson(5);
        });
        // Assert
        assertNotNull(result);
        assertEquals(expResult.getCause(), result.getCause());
    }
}
