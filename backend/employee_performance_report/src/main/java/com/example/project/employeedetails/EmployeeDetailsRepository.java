package com.example.project.employeedetails;

import com.example.project.employeedetails.EmployeeDetails;
import com.example.project.hr.Hr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeDetailsRepository extends JpaRepository<EmployeeDetails, Integer> {

    @Query("Select emp from employeeDetails emp where emp.email=?1 and emp.password=?2")
    public List<EmployeeDetails> getEmpByDetails(String email, String password);

}
