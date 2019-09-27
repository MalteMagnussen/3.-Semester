/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mainTest;

import entities.Names;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Malte
 */
public class mainTest {
    public static void main(String[] args) {
        Persistence.generateSchema("pu", null);
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        System.out.println(em.createQuery("SELECT r FROM Names r", Names.class).getResultList());
    }
            
}
