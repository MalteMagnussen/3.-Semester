package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.PersonDTO;
import entities.Person;
import facades.IPersonFacade;
import utils.EMF_Creator;
import facades.PersonFacade;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("person")
public class PersonResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
    private static final IPersonFacade FACADE = PersonFacade.getPersonFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    @Path("/all")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getAllPersonsDTO() {

        List<PersonDTO> peopleDTO = new ArrayList<>();
        for (Person person : FACADE.getAllPersons()) {
            peopleDTO.add(
                    new PersonDTO(person)
            );
        }

        Map all = new HashMap();
        all.put("all", peopleDTO);
        return GSON.toJson(all);
    }
    
    @Path("/{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String getPersonDTObyID(@PathParam("id") int id) {
        PersonDTO person = new PersonDTO(FACADE.getPerson(id));
        return GSON.toJson(person);
    }
    
    

}
