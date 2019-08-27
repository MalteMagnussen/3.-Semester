/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dbfacade;

import entity.Customer;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

/**
 *
 * @author Malte
 */
public class CustomerFacadeImpl implements CustomerFacade {

    private static EntityManagerFactory emf;
    private static CustomerFacadeImpl instance;

    public static CustomerFacadeImpl getCustomerFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new CustomerFacadeImpl();
        }
        return instance;
    }

    public CustomerFacadeImpl() {
    }

    @Override
    public Customer findByID(Long id) {
        EntityManager em = emf.createEntityManager();
        try {
            Customer customer = em.find(Customer.class, id);
            return customer;
        } finally {
            em.close();
        }
    }

    @Override
    public List<Customer> findByLastName(String name) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query
                    = em.createQuery("Select c FROM Customer c WHERE c.lastName = :name", Customer.class).setParameter("name", name);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    @Override
    public int getNumberOfCustomers() {
        EntityManager em = emf.createEntityManager();
        Query q = em.createQuery("SELECT COUNT(c) FROM Customer c");
        Long numberOfCustomers = (Long) q.getSingleResult();
        int result = numberOfCustomers.intValue();
        return result;
    }

    @Override
    public List<Customer> allCustomers() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query
                    = em.createQuery("SELECT c FROM Customer c", Customer.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    @Override
    public Customer addCustomer(String fName, String lName) {
        Customer customer = new Customer(fName, lName);
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(customer);
            em.getTransaction().commit();
            return customer;
        } finally {
            em.close();
        }
    }

}
