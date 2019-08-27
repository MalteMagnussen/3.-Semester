/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dbfacade;

import entity.Customer;
import java.util.List;

/**
 *
 * @author Malte
 */
public interface CustomerFacade {

    /**
     * Find one customer by its ID.
     *
     * @param id of the customer you wish to find.
     * @return Customer Object
     */
    public Customer findByID(Long id);

    /**
     * Find customers by last name.
     *
     * @param name of the customer
     * @return list of customers with this last name
     */
    public List<Customer> findByLastName(String name);

    /**
     * Get Number of Customers
     *
     * @return number of customers in the database
     */
    public int getNumberOfCustomers();

    /**
     * Get all Customers from database.
     *
     * @return list of customers.
     */
    public List<Customer> allCustomers();

    /**
     * Add a customer to the database.
     *
     * @param fName First name of the customer
     * @param lName Last name of the customer
     * @return Customer
     */
    public Customer addCustomer(String fName, String lName);

}
