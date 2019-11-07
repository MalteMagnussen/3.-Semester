/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.Book;

/**
 *
 * @author Malte
 */
public class BookDTO {

    private int id;
    private String title, info;

    public BookDTO() {
    }

    public BookDTO(int id, String title, String info) {
        this.id = id;
        this.title = title;
        this.info = info;
    }

    public BookDTO(Book book) {
        this.id = book.getId();
        this.title = book.getTitle();
        this.info = book.getInfo();

    }

    public int getId() {
        return id;
    }

    public String getInfo() {
        return info;
    }

    public String getTitle() {
        return title;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
