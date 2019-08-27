/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * 5). create a plain Java Class MakeTestData.java in the entity package. Add a
 * main method, and use the entity framework to create, and persist to the
 * database, a number of BankCustomers.
 *
 * @author Malte
 */
public class MakeTestData {

    public static void main(String[] args) {

        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        BankCustomer customer1 = new BankCustomer("Malte", "Magnussen", "10", 43000.44, 6, "Student");
        BankCustomer customer2 = new BankCustomer("Jens", "Forbryder", "1", 10.12, 55, "Hold ekstra øje");
        BankCustomer customer3 = new BankCustomer("Poul", "Pirat", "3", 723482.54, 33, "Hold ekstra øje");
        BankCustomer customer4 = new BankCustomer("Nikolaj", "Tyv", "4", 432.94, 54, "Hold ekstra øje");
        BankCustomer customer5 = new BankCustomer("Benny", "Røver", "5", 1.49, 78, "Hold ekstra øje");
        BankCustomer customer6 = new BankCustomer("Viktor", "Bandit", "6", 5432.4, 19, "Hold ekstra øje");

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
