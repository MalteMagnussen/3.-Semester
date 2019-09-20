/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import utils.EMF_Creator;
import static utils.EMF_Creator.createEntityManagerFactory;

/**
 *
 * @author Malte
 */
public class mainTest {

    public static void main(String[] args) {
        EntityManagerFactory emf = createEntityManagerFactory(EMF_Creator.DbSelector.DEV, EMF_Creator.Strategy.CREATE);
        
        SemesterFacade facade = SemesterFacade.getSemesterFacade(emf);
        System.out.println(facade.teachOnMostSemesters()); // Expect ID = 3
        
    }
}
