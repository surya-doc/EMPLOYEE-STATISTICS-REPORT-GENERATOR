package com.example.project.login;

import jakarta.persistence.Entity;
import org.springframework.stereotype.Component;

@Component
public class Profile {
    int id;
    String name;
    String emailid;

    public Profile(int id, String name, String emailid) {
        this.id = id;
        this.name = name;
        this.emailid = emailid;
    }

    public Profile() {
        super();
    }

    public int getId() {
        return this.id;
    }

    public String getName() {
        return this.name;
    }

    public String getEmailid() {
        return this.emailid;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

}
