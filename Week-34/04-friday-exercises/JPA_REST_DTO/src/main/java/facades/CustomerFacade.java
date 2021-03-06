package facades;

import dto.CustomerDTO;
import entities.BankCustomer;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 * 8) Change the existing facade to provide the following methods. customerDTO
 * getCustomerByID(int id) List<customerDTO> getCustomerDTOByLastName(String
 * name) BankCustomer addCustomer(BankCustomer cust) List<BankCustomer>
 * getAllBankCustomers()
 *
 * Assume that the last two methods only will be used by the bank and eventually
 * will require users with elevated security privileges so here we use the
 * Entity Class instead of a DTO, to simplify matters.
 *
 */
public class CustomerFacade {

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
    public static CustomerFacade getFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new CustomerFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    /**
     * Get CustomerDTO by ID.
     *
     * @param id of the customer.
     * @return CustomerDTO object.
     */
    public CustomerDTO getCustomerDTOByID(int id) {
        EntityManager em = getEntityManager();
        Long longID = new Long(id);
        try {
            return new CustomerDTO(em.find(BankCustomer.class, longID));
        } finally {
            em.close();
        }
    }

    /**
     * Search customers by last name.
     *
     * @param name lastName of the Customer
     * @return List of all Customers with that last name.
     */
    public List<CustomerDTO> getCustomerDTOByLastName(String name) {
        EntityManager em = getEntityManager();
        try {
            return em.createQuery("Select new dto.CustomerDTO(e) FROM BankCustomer e WHERE e.lastName = :lastName", CustomerDTO.class)
                    .setParameter("lastName", name).getResultList();
        } finally {
            em.close();
        }
    }

    /**
     * Adds a new customer to the database
     *
     * @param cust
     * @return
     */
    public BankCustomer addCustomer(BankCustomer cust) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(cust);
            em.getTransaction().commit();
            return cust;
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
        return null;
    }

    /**
     * Get all Bank Customers
     *
     * @return a list of all bank customers
     */
    public List<BankCustomer> getAllBankCustomers() {
        EntityManager em = getEntityManager();
        try {
            return em.createQuery("select c from BankCustomer c", BankCustomer.class).getResultList();
        } finally {
            em.close();

        }
    }

}
