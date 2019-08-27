/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dbfacade;

import static dbfacade.CustomerFacadeImpl.getCustomerFacade;
import entity.Customer;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Malte
 */
public class FacadeTested {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        Customer customer1 = new Customer("Hans", "Andersen");
        Customer customer2 = new Customer("Anders", "Hansen");

        try {
            em.getTransaction().begin();
            em.persist(customer1);
            em.persist(customer2);
            em.getTransaction().commit();

            System.out.println(customer1);
            System.out.println(customer2);
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }

        CustomerFacade facade = getCustomerFacade(emf);
        System.out.println(facade.findByID(1l).getFirstName());
    }
}
