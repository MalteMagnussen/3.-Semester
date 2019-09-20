/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import entities.Semester;
import entities.Student;
import entities.Teacher;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import mappers.StudentInfo;

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
    public static SemesterFacade getSemesterFacade(EntityManagerFactory _emf) {
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
    public Student assignToSemester(Long studentId, Long semesterId) {
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
    public int getStudentCountBySemester(String semester) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            int studentCount = em.createNamedQuery("Student.findBySemesterCount").setParameter("semester", semester).getFirstResult();
            em.getTransaction().commit();
            return studentCount;
        } finally {
            em.close();
        }
    }

    // Find (using JPQL) the total number of students in all semesters.
    // Find (using JPQL) the teacher(s) who teaches on most semesters.
    // Now create a method (using JPQL) with the following signature to return a list of all Students, encapsulated as StudentInfo’s.
    public List<StudentInfo> getStudentInfo() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Collection<Student> students = em.createNamedQuery("Student.findAll").getResultList();
            em.getTransaction().commit();
            List<StudentInfo> studentInfo = new ArrayList<>();
            for (Student student : students) {
                studentInfo.add(new StudentInfo(student.getFirstname(), student.getLastname(), student.getId(), student.getSemester().getName(), student.getSemester().getDescription()));
            }
            return studentInfo;
        } finally {
            em.close();
        }
    }

    public List<StudentInfo> getStudentInfo2() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            List<StudentInfo> students = em.createQuery("SELECT new mappers.StudentInfo(s.firstname, s.lastname, s.id, s.semester.name, s.semester.description) FROM Student s").getResultList();
            em.getTransaction().commit();
            return students;
        } finally {
            em.close();
        }
    }

    //  Create a method, similar to the one above, but which returns a single StudentInfo, given a students id as sketched below:
    public StudentInfo getStudentInfo(long id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            StudentInfo student = (StudentInfo) em.createQuery("SELECT new mappers.StudentInfo(s.firstname, s.lastname, s.id, s.semester.name, s.semester.description) FROM Student s WHERE s.id = :id")
                    .setParameter("id", id).getSingleResult();
            em.getTransaction().commit();
            return student;
        } finally {
            em.close();
        }
    }
    
    // Find (using JPQL) the teacher(s) who teaches on most semesters.
    public Teacher teachOnMostSemesters() {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Teacher teacher = (Teacher) em.createQuery("SELECT t FROM Teacher t WHERE t.id = (SELECT max(s.id) FROM Teacher t JOIN t.semesterCollection s)").getSingleResult();
            em.getTransaction().commit();
            return teacher;        
        } finally {
            em.close();
        }
        
    }

}
