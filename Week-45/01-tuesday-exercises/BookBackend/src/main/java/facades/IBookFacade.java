/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.BookDTO;
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
    
    public List<BookDTO> getBooks();
    public BookDTO getBook(int id);
    public void createBook(BookDTO bookDTO);
    public BookDTO editBook(BookDTO bookDTO);
    public String deleteBook(int id);
    
}
