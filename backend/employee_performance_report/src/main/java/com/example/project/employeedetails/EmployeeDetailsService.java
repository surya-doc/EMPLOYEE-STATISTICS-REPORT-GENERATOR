package com.example.project.employeedetails;

import com.example.project.employee.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public List<EmployeeDetails> getEmployeeByTeam(int teamid) {   return this.employeeDetailsRepository.getemployeeBYTeam(teamid);   }

}
