/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package tests;

import com.sun.org.apache.bcel.internal.generic.AALOAD;
import entities.Address;
import entities.Customer;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Malte
 */
public class Tester {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        Persistence.generateSchema("pu", null);
        EntityManager em = emf.createEntityManager();

        Customer customer1 = new Customer("customer1firstName", "customer1lastName");
        Customer customer2 = new Customer("customer2firstName", "customer2lastName");

        //HOBBY
        customer1.addHobby("Tennis");
        customer1.addHobby("sailing");
        customer1.addHobby("video games");
        customer1.addHobby("dancing");

        customer2.addHobby("singing");
        customer2.addHobby("flowers");
        customer2.addHobby("rapping");
        customer2.addHobby("Mixed Martial Arts");

        //PHONE
        customer1.addPhone("12003200", "Home Phone");
        customer1.addPhone("98007600", "Mobile Phone");

        customer2.addPhone("65004300", "Home Phone");
        customer2.addPhone("23003400", "Mobile Phone");
        
        //ADDRESSES 
        customer1.addAddress(new Address("Lyngbyvej", "Lyngby"));
        customer1.addAddress(new Address("Sommerhusvej", "Sommerhusby"));
        
        customer2.addAddress(new Address("Gillelejevej", "Gilleleje"));
        customer2.addAddress(new Address("Lyngbyvej", "Lyngby"));

        try {
            em.getTransaction().begin();
            em.persist(customer1);
            em.persist(customer2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }

    }
}
