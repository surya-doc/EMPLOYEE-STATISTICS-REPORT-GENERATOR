package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "mentor")
public class Mentor {
  @Id
  private Integer mentorid;

  private String name;

  private String email;

  private String password;

  private Integer teamid;

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

  public Integer getTeamid() {
    return this.teamid;
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

  public void setTeamid(Integer teamid) {
    this.teamid = teamid;
  }

  public void setStatus(boolean status) {
    this.status = status;
  }
}
