package rest;

import entities.Person;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entities.Person;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("person")
public class PersonResource {

    public static Person peterPan = new Person("Peter Pan");
    public static Person johnWick = new Person("John Wick");
    public static List<Person> people = new ArrayList<>();
    public static List<Integer> ids = new ArrayList<>();

    public PersonResource() {
        if (people.isEmpty()) {
            peterPan.setID(1);
            ids.add(1);
            people.add(peterPan);
            johnWick.setID(2);
            ids.add(2);
            people.add(johnWick);
        }
    }

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAllPersons() {
        HashMap map;
        map = new HashMap<>();
        map.put("all", people);
        return GSON.toJson(map);
    }

    @Path("{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getPersonbyID(@PathParam("id") int id) {
        Person person = null;
        for (Person _person : people) {
            if (_person.getID() == id) {
                person = _person;
            }
        }
        return GSON.toJson(person);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response savePerson(String p) {
        Person person = GSON.fromJson(p, Person.class);
        person.setID(ids.size()+1);
        ids.add(person.getID());
        people.add(person);
        return Response.ok(person).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editPerson(String p) {
        Person person = GSON.fromJson(p, Person.class);
        people.forEach((_person) -> {
            if (person.getID() == _person.getID()) {
                _person.setName(person.getName());
            }
        });
        return Response.ok(person).build();
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String deletePerson(@PathParam("id") int id) {
        people.forEach((person) -> {
            if (person.getID() == id) {
                people.remove(person);
            }
        });
        return "{\"status\": \"removed\"}";

    }

}
