package com.example.project.employeedetails;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "employeeDetails")
@Table(name = "employeeDetails")
public class EmployeeDetails {
    @Id
    private Integer empid;

    private String email;

    private String password;

    private String address;

    private Integer teamid;

    private String role;


    public EmployeeDetails(Integer empid, String email, String password, String address, Integer teamid, String role) {
        this.empid = empid;
        this.email = email;
        this.password = password;
        this.address = address;
        this.teamid = teamid;
        this.role = role;
    }

    public EmployeeDetails() {
        super();
    }

    public Integer getEmpid() {
        return this.empid;
    }

    public String getEmail() {
        return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public String getAddress() {
        return this.address;
    }

    public Integer getTeamid() {
        return this.teamid;
    }

    public String getRole() {
        return this.role;
    }

    public void setEmpid(Integer empid) {
        this.empid = empid;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setTeamid(Integer teamid) {
        this.teamid = teamid;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String toString() {
        return "EmployeeDetails(empid=" + this.getEmpid() + ", email=" + this.getEmail() + ", password=" + this.getPassword() + ", address=" + this.getAddress() + ", teamid=" + this.getTeamid() + ", role=" + this.getRole() + ")";
    }
}
