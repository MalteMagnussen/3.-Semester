package rest;

import dto.BookDTO;
import dto.PersonDTO;
import dto.PersonDTOnoId;
import entities.Book;
import entities.Person;
import exceptions.BookNotFoundException;
import exceptions.MissingInputException;
import exceptions.PersonNotFoundException;
import facades.BookFacade;
import facades.IBookFacade;
import java.util.ArrayList;
import java.util.List;
import utils.EMF_Creator;
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

@Path("book")
public class BookResource {
    
    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
    private static final IBookFacade FACADE = BookFacade.getBookFacade(EMF);
    
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public List<BookDTO> getAllBooks() throws BookNotFoundException {
        return FACADE.getBooks();
    }
    
    @Path("{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public BookDTO getBookbyID(@PathParam("id") int id) throws BookNotFoundException {
        return FACADE.getBook(id);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response saveBook(BookDTO bookDTO) throws MissingInputException {
        BookDTO responseBook = FACADE.createBook(bookDTO);
        return Response.ok(responseBook).build();
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editBook(BookDTO bookDTO) throws MissingInputException {
        BookDTO responseDTO = FACADE.editBook(bookDTO);
        return Response.ok(responseDTO).build();
    }
    
    @DELETE
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public String deleteBook(@PathParam("id") int id) throws BookNotFoundException {
        FACADE.deleteBook(id);
        return "{\"status\": \"removed\"}";
    }
    
}
