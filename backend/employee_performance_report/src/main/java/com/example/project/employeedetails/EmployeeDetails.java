package com.example.project.employeedetails;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "employeeDetails")
@Table(name = "employeeDetails")
public class EmployeeDetails {
    @Id
    private Integer empid;

    private String name;

    private String email;

    private String password;

    private String address;

    private boolean status;

    private Integer attendance;

    private Integer teamid;

    public EmployeeDetails(Integer empid, String name, String email, String password, String address, boolean status, Integer attendance, Integer teamid) {
        this.empid = empid;
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.status = status;
        this.attendance = attendance;
        this.teamid = teamid;
    }

    public Integer getEmpid() {
        return this.empid;
    }

    public String getName() {
        return this.name;
    }

    public String getEmail() {
        return this.email;
    }

    public String getAddress() {
        return this.address;
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

    public void setAddress(String address) {
        this.address = address;
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

    public EmployeeDetails() {
        super();
        // TODO Auto-generated constructor stub
    }

    @Override
    public String toString() {
        return "EmployeeDetails [empid=" + empid + ", name=" + name + ", email=" + email + ", password=" + password + ", address=" + address
                + ", status=" + status + ", attendance=" + attendance + ", teamid=" + teamid + "]";
    }


    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
