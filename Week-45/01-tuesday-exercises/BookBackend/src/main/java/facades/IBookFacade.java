/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.BookDTO;
import exceptions.BookNotFoundException;
import exceptions.MissingInputException;
import java.util.List;

/**
 *
 * @author Malte
 */
public interface IBookFacade {
    // Get All
    // Get by ID
    // Create Book
    // Edit Book
    // Delete Book
    
    public List<BookDTO> getBooks() throws BookNotFoundException;
    public BookDTO getBook(int id) throws BookNotFoundException;
    public BookDTO createBook(BookDTO bookDTO) throws MissingInputException;
    public BookDTO editBook(BookDTO bookDTO) throws MissingInputException;
    public void deleteBook(int id);
    
}
