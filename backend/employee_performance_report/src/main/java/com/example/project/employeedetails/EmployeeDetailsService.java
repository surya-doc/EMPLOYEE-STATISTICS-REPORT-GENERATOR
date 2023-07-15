package com.example.project.employeedetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeDetailsService {
    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;

    public EmployeeDetails getEmployeeDetailsById(int id) {  return this.employeeDetailsRepository.findById(id).orElseThrow(null);  }

    public void createEmployeeDetails(EmployeeDetails employeeDetails)
    {
        this.employeeDetailsRepository.save(employeeDetails);
    }

    public void updateEmployeeDetailsById(EmployeeDetails employeeDetails)
    {
        this.employeeDetailsRepository.save(employeeDetails);
    }

    public void deleteEmployeeDetailsById(int id)
    {
        this.employeeDetailsRepository.deleteById(id);
    }
}
