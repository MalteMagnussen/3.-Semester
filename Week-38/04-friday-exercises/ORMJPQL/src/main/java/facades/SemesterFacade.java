/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Semester;
import entities.Student;
import java.util.Collection;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Malte
 */
public class SemesterFacade {

    private static SemesterFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private SemesterFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static SemesterFacade getCustomerFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new SemesterFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    // Find all students in the system
    public Collection<Student> findAllStudents() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Collection<Student> students = em.createNamedQuery("Student.findAll").getResultList();
            em.getTransaction().commit();
            return students;
        } finally {
            em.close();
        }
    }

    // Find all students in the system with the first name Anders.
    public Collection<Student> findStudentByName(String firstname) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Collection<Student> students = em.createNamedQuery("Student.findByFirstname").setParameter("firstname", firstname).getResultList();
            em.getTransaction().commit();
            return students;
        } finally {
            em.close();
        }
    }

    // Insert a new Student into the system. 
    public Student insertStudent(Student student) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(student);
            em.getTransaction().commit();
            return student;
        } finally {
            em.close();
        }
    }

    // Assign a new student to a semester (given the student-id and semester-id)
    public Student assignToSemester(int studentId, int semesterId) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Student student = em.find(Student.class, studentId);
            Semester semester = em.find(Semester.class, semesterId);
            em.getTransaction().commit();

            student.setSemester(semester);

            em.getTransaction().begin();
            em.merge(student);
            em.getTransaction().commit();
            return student;
        } finally {
            em.close();
        }
    }

    // Find (using JPQL) all Students in the system with the last name And
    public Collection<Student> findAllStudents(String lastname) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Collection<Student> students = em.createNamedQuery("Student.findByLastname").setParameter("lastname", lastname).getResultList();
            em.getTransaction().commit();
            return students;
        } finally {
            em.close();
        }
    }

    // Find (using JPQL) the total amount of all students
    public int getStudentCount() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            int studentCount = em.createNamedQuery("Student.count").getFirstResult();
            em.getTransaction().commit();
            return studentCount;
        } finally {
            em.close();
        }
    }

    // Find (using JPQL)  the total number of students, for a semester given the semester name as a parameter.
    // Find (using JPQL) the total number of students in all semesters.
    // Find (using JPQL) the teacher(s) who teaches on most semesters.
}
