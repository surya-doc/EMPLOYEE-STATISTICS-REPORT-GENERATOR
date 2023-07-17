package com.example.project.login;

import org.springframework.stereotype.Component;

@Component
public class LoginInfo {
    String type;
    String email;
    String password;

    public LoginInfo(String type, String email, String Password) {
        this.type = type;
        this.email = email;
        this.password = Password;
    }

    public LoginInfo() {
        super();
    }

    public String getType() {
        return this.type;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String Password) {
        this.password = Password;
    }
}
