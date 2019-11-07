/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.BookDTO;
import entities.Book;
import exceptions.BookNotFoundException;
import exceptions.MissingInputException;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.eclipse.persistence.internal.oxm.record.json.JSONReader;

/**
 *
 * @author Malte
 */
public class BookFacade implements IBookFacade {
    
    private static BookFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private BookFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static BookFacade getBookFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new BookFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    @Override
    public List<BookDTO> getBooks() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            List<Book> books = em.createQuery("SELECT b FROM Book b").getResultList();
            em.getTransaction().commit();
            List<BookDTO> books_dto = new ArrayList<>();
            books.forEach(book -> books_dto.add(new BookDTO(book)));
            return books_dto;
        } finally {
            em.close();
        }
    }

    @Override
    public BookDTO getBook(int id) throws BookNotFoundException {
        EntityManager em = getEntityManager();
        try {
            Book book = em.find(Book.class, id);
            if (book == null) {
                throw new BookNotFoundException("No book exists with that ID.");
            } else {
                return new BookDTO(book);
            }
        } finally {
            em.close();
        }
    }

    @Override
    public void createBook(BookDTO bookDTO) throws MissingInputException{
        if (bookDTO == null || bookDTO.getInfo() == null || bookDTO.getInfo().isEmpty() || bookDTO.getTitle() == null || bookDTO.getTitle().isEmpty()){
            throw new MissingInputException("Missing input when creating a book.");
        }
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(new Book(bookDTO));
            em.getTransaction().commit();
        } catch (Exception ex) {
            System.out.println(ex.getMessage());
        } finally {
            em.close();
        }
        
    }

    @Override
    public BookDTO editBook(BookDTO bookDTO) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public String deleteBook(int id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}
