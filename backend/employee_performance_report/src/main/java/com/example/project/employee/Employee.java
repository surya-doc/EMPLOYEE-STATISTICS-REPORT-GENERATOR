package com.example.project.employee;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity(name = "employee")
@Table(name = "employee")
public class Employee {
    @Id
    private Integer empid;
    private String name;
    private Boolean status;
    private Integer attendance;
    private String total_working_days;

    public Employee(Integer empid, String name, Boolean status, Integer attendance, String total_working_days) {
        this.empid = empid;
        this.name = name;
        this.status = status;
        this.attendance = attendance;
        this.total_working_days = total_working_days;
    }

    public Employee() {
        super();
    }

    public Integer getEmpid() {
        return this.empid;
    }

    public String getName() {
        return this.name;
    }

    public Boolean getStatus() {
        return this.status;
    }

    public Integer getAttendance() {
        return this.attendance;
    }

    public String getTotal_working_days() {
        return this.total_working_days;
    }

    public void setEmpid(Integer empid) {
        this.empid = empid;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public void setAttendance(Integer attendance) {
        this.attendance = attendance;
    }

    public void setTotal_working_days(String total_working_days) {
        this.total_working_days = total_working_days;
    }

    public String toString() {
        return "Employee(empid=" + this.getEmpid() + ", name=" + this.getName() + ", status=" + this.getStatus() + ", attendance=" + this.getAttendance() + ", total_working_days=" + this.getTotal_working_days() + ")";
    }
}
