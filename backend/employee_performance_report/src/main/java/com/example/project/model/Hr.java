package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hr")
public class Hr {
  @Id
  private Integer hrid;

  private String name;

  private String email;

  private String password;

  private Boolean status;

  public Integer getHrid() {
    return this.hrid;
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

  public Boolean getStatus() {
    return this.status;
  }

  public void setHrid(Integer hrid) {
    this.hrid = hrid;
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

  public void setStatus(Boolean status) {
    this.status = status;
  }
}
