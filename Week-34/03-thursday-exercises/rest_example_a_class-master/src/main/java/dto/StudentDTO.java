/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entity.Student;

/**
 *
 * @author Malte
 */
public class StudentDTO {
    
    private int id;
    private String first_last_name;
    private String class_name;

    public StudentDTO(Student student) {
        this.id = student.getId();
        this.first_last_name = student.getName();
        this.class_name = student.getClassName();
    }
    
    

    /**
     * Get the value of className
     *
     * @return the value of className
     */
    public String getClassName() {
        return class_name;
    }

    /**
     * Set the value of className
     *
     * @param className new value of className
     */
    public void setClassName(String className) {
        this.class_name = className;
    }


    /**
     * Get the value of name
     *
     * @return the value of name
     */
    public String getName() {
        return first_last_name;
    }

    /**
     * Set the value of name
     *
     * @param name new value of name
     */
    public void setName(String name) {
        this.first_last_name = name;
    }


    /**
     * Get the value of id
     *
     * @return the value of id
     */
    public int getId() {
        return id;
    }

    /**
     * Set the value of id
     *
     * @param id new value of id
     */
    public void setId(int id) {
        this.id = id;
    }

}
