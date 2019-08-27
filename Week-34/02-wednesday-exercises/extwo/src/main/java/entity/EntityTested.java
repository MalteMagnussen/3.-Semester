/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * Run this to populate development DB. 
 * @author Malte
 */
public class EntityTested {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        Customer customer1 = new Customer("Hans", "Jensen");
        Customer customer2 = new Customer("Anders", "Magnussen");
        Customer customer3 = new Customer("John", "Westergaard");
        Customer customer4 = new Customer("Jonas", "Vejle");
        Customer customer5 = new Customer("Victor", "Landmand");
        Customer customer6 = new Customer("Søren", "Jonson");

        try {
            em.getTransaction().begin();
            em.persist(customer1);
            em.persist(customer2);
            em.persist(customer3);
            em.persist(customer4);
            em.persist(customer5);
            em.persist(customer6);
            em.getTransaction().commit();

            System.out.println(customer1);
            System.out.println(customer2);
            System.out.println(customer3);
            System.out.println(customer4);
            System.out.println(customer5);
            System.out.println(customer6);
        } catch (Exception e) {
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }

}
