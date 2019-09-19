package rest;

import entities.Person;
import utils.EMF_Creator;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.parsing.Parser;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.ws.rs.core.UriBuilder;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.util.HttpStatus;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator.Strategy;

public class PersonResourceTest {

    private static final int SERVER_PORT = 7777;
    private static final String SERVER_URL = "http://localhost/api";

    static final URI BASE_URI = UriBuilder.fromUri(SERVER_URL).port(SERVER_PORT).build();
    private static HttpServer httpServer;
    private static EntityManagerFactory emf;

    static HttpServer startServer() {
        ResourceConfig rc = ResourceConfig.forApplication(new ApplicationConfig());
        return GrizzlyHttpServerFactory.createHttpServer(BASE_URI, rc);
    }

    @BeforeAll
    public static void setUpClass() {
        emf = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.TEST, Strategy.DROP_AND_CREATE);

        httpServer = startServer();

        RestAssured.baseURI = SERVER_URL;
        RestAssured.port = SERVER_PORT;

        RestAssured.defaultParser = Parser.JSON;
    }

    @AfterAll
    public static void closeTestServer() {
        httpServer.shutdownNow();
    }

    private Person person;
    private List<Person> people;

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
    public void getAllPersonsTest() {
        given()
                .contentType("application/json").when()
                .get("/person").then().log().body().assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("all[0].id", equalTo(1))
                .body("all[0].fName", equalTo("Malte"))
                .body("all[0].lName", equalTo("Magnussen"))
                .body("all[0].phone", equalTo("42301207"))
                .body("all[1].id", equalTo(2))
                .body("all[1].fName", equalTo("Jens"))
                .body("all[1].lName", equalTo("Laigaard"))
                .body("all[1].phone", equalTo("98765432"))
                .body("all[2].id", equalTo(3))
                .body("all[2].fName", equalTo("August"))
                .body("all[2].lName", equalTo("Enevoldsen"))
                .body("all[2].phone", equalTo("12345678"))
                .body("all.size()", is(3));
    }
    
    @Test
    public void getPersonByIdTest() {
        given()
                .contentType("application/json").when()
                .get("/person/1").then().log().body().assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("id", equalTo(1))
                .body("fName", equalTo("Malte"))
                .body("lName", equalTo("Magnussen"))
                .body("phone", equalTo("42301207"));
    }
    
    @Test
    public void deletePersonByIdTest() {
        given()
                .contentType("application/json").when()
                .delete("/person/1").then().log().body().assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("status", equalTo("removed"));
    }
    
//    @Test
//    public void putPersonTest() {
//        given()
//                .contentType("application/json").when()
//                .put("/person").then().log().body().assertThat()
//                .statusCode(HttpStatus.OK_200.getStatusCode())
//                .body("id", equalTo(1))
//                .body("fName", equalTo("Malte"))
//                .body("lName", equalTo("Magnussen"))
//                .body("phone", equalTo("42301207"));
//    }

}
