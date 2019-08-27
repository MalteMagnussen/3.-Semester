/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author thomas
 */
public class Tester {
    Gson gson = new Gson();
    private static List<Student> students = new ArrayList();
    {
    students.add(new Student(1, "Hanne", "A"));
    students.add(new Student(2, "Hassan", "A"));
    students.add(new Student(3, "Helge", "A"));
    students.add(new Student(4, "Ho", "B"));
    }
    public Student getStud(int id){
        return students.get(id);
    }
    public static void main(String[] args) {
        System.out.println(new Tester().getStud(2));
    }
}
