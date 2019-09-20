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
            return customer;
        } catch (Exception e) {
            throw new PersonNotFoundException("Couldn't find customer.");
        } finally {
            em.close();
        }
    }

    @Override
    public List<Customer> getAllCustomers() throws PersonNotFoundException {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            List<Customer> customers = em.createNamedQuery("Customer.getAll", Customer.class).getResultList();
            em.getTransaction().commit();
            if (customers != null) {
                return customers;
            } else {
                throw new PersonNotFoundException("Couldn't find customers.");
            }
        } finally {
            em.close();
        }
    }

    @Override
    public ItemType createItemType(String name, String description, int price) throws MissingInputException {
        if (name != null && !name.isEmpty() && description != null && !description.isEmpty() && !(price <= 0)) {
            ItemType item = new ItemType(name, description, price);
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                em.persist(item);
                em.getTransaction().commit();
                return item;
            } finally {
                em.close();
            }
        } else {
            throw new MissingInputException("Name or Description was empty or price was <= 0.");
        }
    }

    @Override
    public Customer addOrderToCustomer(Customer customer, Order order) throws MissingInputException, PersonNotFoundException {
        if (customer != null && order != null) {
            customer.addOrder(order);
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                em.merge(customer);
                em.getTransaction().commit();
                return customer;
            } catch (Exception e) {
                throw new PersonNotFoundException("Customer didn't exist in database.");
            } finally {
                em.close();
            }
        } else {
            throw new MissingInputException("Customer or Order was null.");
        }
    }

    @Override
    public Order addOrderLineToOrder(OrderLine orderLine, Order order) throws MissingInputException, PersonNotFoundException {
        if (orderLine != null && order != null) {
            order.addOrder(orderLine);
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                em.merge(order);
                em.getTransaction().commit();
                return order;
            } catch (Exception e) {
                throw new PersonNotFoundException("Order didn't exist in database.");
            } finally {
                em.close();
            }
        } else {
            throw new MissingInputException("OrderLine or Order was null.");
        }
    }

    @Override
    public List<Order> allOrderFromCustomer(Customer customer) throws PersonNotFoundException, MissingInputException {
        if (customer != null) {
            EntityManager em = getEntityManager();
            try {
                em.getTransaction().begin();
                List<Order> orders = em.createNamedQuery("Order.getByCustomer", Order.class).setParameter("customer", customer).getResultList();
                em.getTransaction().commit();
                return orders;
            } catch (Exception e) {
                throw new PersonNotFoundException("Couldn't find any orders from this customer.");
            } finally {
                em.close();
            }
        } else {
            throw new MissingInputException("Customer must not be null.");
        }
    }

    @Override
    public int totalPriceOfOrder(Order order) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public ItemType findItemType(long id) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

}
