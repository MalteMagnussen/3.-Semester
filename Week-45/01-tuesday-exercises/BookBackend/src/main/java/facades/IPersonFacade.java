/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Person;
import exceptions.MissingInputException;
import exceptions.BookNotFoundException;
import java.util.List;

/**
 *
 * @author Malte
 */
public interface IPersonFacade {

    public Person addPerson(String fName, String lName, String phone) throws MissingInputException;

    public Person deletePerson(int id) throws BookNotFoundException;

    public Person getPerson(int id) throws BookNotFoundException;

    public List<Person> getAllPersons();

    public Person editPerson(Person p) throws MissingInputException;
}
