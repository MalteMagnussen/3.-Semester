/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Customer;
import entities.ItemType;
import entities.Order;
import entities.OrderLine;
import exceptions.MissingInputException;
import exceptions.PersonNotFoundException;
import java.util.List;

/**
 *
 * @author Malte
 */
public interface ICustomerFacade {
    
    public Customer createCustomer(String name, String email) throws MissingInputException;
    
    public Customer findCustomer(Long id) throws PersonNotFoundException;
    
    public List<Customer> getAllCustomers();
    
    public ItemType createItemType(String name, String description, int price);
    
    public Order addOrderToCustomer(Customer customer);
    
    public OrderLine addOrderLineToOrder(int itemQuantity, String itemName, Order order);
    
    public List<Order> allOrderFromCustomer(Customer customer);
    
    public int totalPriceOfOrder(Order order);
}
