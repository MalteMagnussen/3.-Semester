package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.PersonDTO;
import dto.PersonDTOnoId;
import dto.PersonsDTO;
import entities.Person;
import facades.IPersonFacade;
import utils.EMF_Creator;
import facades.PersonFacade;
import javax.persistence.EntityManagerFactory;
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

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
    private static final IPersonFacade FACADE = PersonFacade.getPersonFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAllPersonsDTO() {
        PersonsDTO persons = new PersonsDTO(FACADE.getAllPersons());
//        Map all = new HashMap();
//        all.put("all", persons);
        return GSON.toJson(persons);
    }

    @Path("{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getPersonDTObyID(@PathParam("id") int id) {
        PersonDTO person = new PersonDTO(FACADE.getPerson(id));
        return GSON.toJson(person);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response savePerson(String p) {
        PersonDTO personDTO = GSON.fromJson(p, PersonDTO.class);
        Person person = FACADE.addPerson(personDTO.getfName(), personDTO.getlName(), personDTO.getPhone());
        PersonDTOnoId responseDTO = new PersonDTOnoId(person);
        return Response.ok(responseDTO).build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editCar(String p) {
        PersonDTO personDTO = GSON.fromJson(p, PersonDTO.class);
        Person person = FACADE.getPerson(personDTO.getId());
        person.editPerson(personDTO);
        PersonDTO responseDTO = new PersonDTO(FACADE.editPerson(person));
        return Response.ok(responseDTO).build();
    }

    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String deleteCar(@PathParam("id") int id) {
        FACADE.deletePerson(id);
        return "{\"status\": \"removed\"}";
    }

}
