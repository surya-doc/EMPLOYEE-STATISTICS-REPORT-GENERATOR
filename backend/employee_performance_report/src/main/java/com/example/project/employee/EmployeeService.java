package com.example.project.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees()
    {
        return this.employeeRepository.findAll();
    }

    public Employee getEmployeeById(int id) {  return this.employeeRepository.findById(id).orElseThrow(null);  }

    public void createEmployee(Employee employee)
    {
        this.employeeRepository.save(employee);
    }

    public void updateEmployeeById(Employee employee)
    {
        this.employeeRepository.save(employee);
    }

    public List<Employee> getEmployeeByTeam(int teamid) {   return this.employeeRepository.getemployeeBYTeam(teamid);   }

    public void deleteEmployeeById(int id)
    {
        this.employeeRepository.deleteById(id);
    }
}
