/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

/**
 *
 * @author Malte
 */
public class Animal {
    private int birthYear;
    private String type;
    private String sound;

    public Animal() {
    }

    public Animal(int birthYear, String type, String sound) {
        this.birthYear = birthYear;
        this.type = type;
        this.sound = sound;
    }

    public int getBirthYear() {
        return birthYear;
    }

    public void setBirthYear(int birthYear) {
        this.birthYear = birthYear;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSound() {
        return sound;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }
    
    
}
