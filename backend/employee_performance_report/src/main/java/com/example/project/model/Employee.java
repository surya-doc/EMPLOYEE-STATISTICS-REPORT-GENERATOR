package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
  @Id
  private Integer empid;

  private String role;

  private Boolean status;

  private Integer teamid;

  private String total_working_days;

  public Integer getEmpid() {
    return this.empid;
  }

  public String getRole() {
    return this.role;
  }

  public Boolean getStatus() {
    return this.status;
  }

  public Integer getTeamid() {
    return this.teamid;
  }

  public String getTotal_working_days() {
    return this.total_working_days;
  }

  public void setEmpid(Integer empid) {
    this.empid = empid;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public void setStatus(Boolean status) {
    this.status = status;
  }

  public void setTeamid(Integer teamid) {
    this.teamid = teamid;
  }

  public void setTotal_working_days(String total_working_days) {
    this.total_working_days = total_working_days;
  }

  public Employee(Integer empid, String role, Boolean status, Integer teamid, String total_working_days) {
		super();
		this.empid = empid;
		this.role = role;
		this.status = status;
		this.teamid = teamid;
		this.total_working_days = total_working_days;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Employee [empid=" + empid + ", role=" + role + ", status=" + status + ", teamid=" + teamid
				+ ", total_working_days=" + total_working_days + "]";
	}
  
	
}
