package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employeeDetails")
public class EmployeeDetails {
  @Id
  private Integer empid;

  private String name;

  private String email;

  private String password;

  private boolean status;

  private Integer attendance;

  private Integer teamid;

  public Integer getEmpid() {
    return this.empid;
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

  public Integer getAttendance() {
    return this.attendance;
  }

  public Integer getTeamid() {
    return this.teamid;
  }

  public void setEmpid(Integer empid) {
    this.empid = empid;
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

  public void setAttendance(Integer attendance) {
    this.attendance = attendance;
  }

  public void setTeamid(Integer teamid) {
    this.teamid = teamid;
  }
}
