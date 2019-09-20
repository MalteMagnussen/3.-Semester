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
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Malte
 */
public class CustomerFacade implements ICustomerFacade {

    private static CustomerFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private CustomerFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static CustomerFacade getCustomerFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new CustomerFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    @Override
    public Customer createCustomer(String name, String email) throws MissingInputException {
        if (name != null && !name.isEmpty() && email != null && !email.isEmpty()) {
            Customer customer = new Customer(name, email);
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                em.persist(customer);
                em.getTransaction().commit();
                return customer;
            } finally {
                em.close();
            }
        } else {
            throw new MissingInputException("Name or Email was empty.");
        }
    }

    @Override
    public Customer findCustomer(Long id) throws PersonNotFoundException {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Customer customer = em.find(Customer.class, id);
            em.getTransaction().commit();
            if (customer != null) {
                return customer;
            } else {
                throw new PersonNotFoundException("Couldn't find customer.");
            }
        } finally {
            em.close();
        }
    }

    @Override
    public List<Customer> getAllCustomers() {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ItemType createItemType(String name, String description, int price) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Order addOrderToCustomer(Customer customer) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public OrderLine addOrderLineToOrder(int itemQuantity, String itemName, Order order) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public List<Order> allOrderFromCustomer(Customer customer) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public int totalPriceOfOrder(Order order) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
