package com.example.project.calculation;

import com.example.project.employeedetails.EmployeeDetails;
import com.example.project.hrfeedback.HrFeedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CalculationRepository extends JpaRepository<Calculation, Integer> {

}
