package rest;

import entities.Person;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.util.ArrayList;
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

    public static List<Integer> ids = new ArrayList<>();
    public static Person peterPan = new Person("Peter Pan");

    public PersonResource() {
        peterPan.setID(ids.size()+1);
    }
    
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAllPersonsDTO() {
        return null;
//        PersonsDTO persons = new PersonsDTO(FACADE.getAllPersons());
//        return GSON.toJson(persons);
    }

    @Path("{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getPersonDTObyID(@PathParam("id") int id) {
        return null;
//        try {
//            PersonDTO person = new PersonDTO(FACADE.getPerson(id));
//            return GSON.toJson(person);
//        } catch (PersonNotFoundException ex) {
//            throw new PersonNotFoundException(ex.getMessage());
//        }
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response savePerson(String p) {
        return null;
//        try {
//            PersonDTO personDTO = GSON.fromJson(p, PersonDTO.class);
//            Person person = FACADE.addPerson(personDTO.getfName(), personDTO.getlName(), personDTO.getPhone());
//            PersonDTOnoId responseDTO = new PersonDTOnoId(person);
//            return Response.ok(responseDTO).build();
//        } catch (MissingInputException ex) {
//            throw new MissingInputException(ex.getMessage());
//        }
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editPerson(String p) {
        return null;
//        try {
//            PersonDTO personDTO = GSON.fromJson(p, PersonDTO.class);
//            Person person = FACADE.getPerson(personDTO.getId());
//            person.editPerson(personDTO);
//            PersonDTO responseDTO = new PersonDTO(FACADE.editPerson(person));
//            return Response.ok(responseDTO).build();
//        } catch (MissingInputException ex) {
//            return Response.notModified(ex.getMessage()).build();
//        }
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String deletePerson(@PathParam("id") int id) {
        return null;
//        try {
//            FACADE.deletePerson(id);
//            return "{\"status\": \"removed\"}";
//        } catch (PersonNotFoundException ex) {
//            throw new PersonNotFoundException(ex.getMessage());
//        }
    }

    

}
