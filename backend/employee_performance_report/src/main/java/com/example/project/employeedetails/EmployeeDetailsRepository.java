package com.example.project.employeedetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeDetailsRepository extends JpaRepository<EmployeeDetails, Integer> {

    @Query("Select emp from employeeDetails emp where emp.teamid=?1 and emp.role=?2")
    public List<EmployeeDetails> getemployeeBYTeam(int id, String role);

    @Query("Select emp from employeeDetails emp where emp.role=?1")
    public List<EmployeeDetails> getListByRole(String role);

    public EmployeeDetails findByEmail(String email);
}
