package com.example.project.mentor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "mentor")
@Table(name = "mentor")
public class Mentor {
  @Id
  private Integer mentorid;

  private String name;

  private String email;

  private String password;


  private boolean status;

  public Integer getMentorid() {
    return this.mentorid;
  }

  public String getName() {
    return this.name;
  }

  public String getEmail() {
    return this.email;
  }

  public String getPassword() {
    return this.password;
  }

  public boolean isStatus() {
    return this.status;
  }

  public void setMentorid(Integer mentorid) {
    this.mentorid = mentorid;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setStatus(boolean status) {
    this.status = status;
  }

public Mentor(Integer mentorid, String name, String email, String password, boolean status) {
	super();
	this.mentorid = mentorid;
	this.name = name;
	this.email = email;
	this.password = password;
	this.status = status;
}

public Mentor() {
	super();
	// TODO Auto-generated constructor stub
}

@Override
public String toString() {
	return "Mentor [mentorid=" + mentorid + ", name=" + name + ", email=" + email + ", password=" + password
			 + ", status=" + status + "]";
}

}
