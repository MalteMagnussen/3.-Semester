/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package factories;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 * EntityManagerFactory Factory.
 * @author Malte
 */
public class EntityManagerFactoryFactory {
    
    /* Add your databases to this */
    private static EntityManagerFactory TEST_EMF;
    private static EntityManagerFactory DEVELOPMENT_EMF;
    private static EntityManagerFactory PRODUCTION_EMF;
    
    public static EntityManagerFactory getFactory(String factoryType){
        switch (factoryType) {
            case "TEST":
                TEST_EMF = Persistence.createEntityManagerFactory("pu_test"); 
                return TEST_EMF;
            case "PRODUCTION":
                PRODUCTION_EMF = Persistence.createEntityManagerFactory("pu_development");
                return PRODUCTION_EMF;
            case "DEVELOPMENT":
                DEVELOPMENT_EMF = Persistence.createEntityManagerFactory("pu_development");
                return DEVELOPMENT_EMF;
            default:
                throw new AssertionError("Choose a valid option for your EntityManagerFactory");
        }
    }
}
