package com.example.project.employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    @Query("Select emp from employee emp where emp.teamid=?1")
    public List<Employee> getemployeeBYTeam(int id);
}
