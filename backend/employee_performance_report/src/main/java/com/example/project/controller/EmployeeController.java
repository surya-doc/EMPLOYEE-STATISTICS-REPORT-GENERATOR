package com.example.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.model.Employee;
import com.example.project.repository.EmployeeRepository;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@GetMapping("/")
	public List<Employee> getAllEmployees()
	{
		return this.employeeRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable int id)
	{
		return this.employeeRepository.findById(id).orElseThrow(null);
	}
	
	@PostMapping("/createEmployee")
	public void createEmployee(@RequestBody Employee employee)
	{
		this.employeeRepository.save(employee);
	}
	
	@PutMapping("/updateEmployee/{id}")
	public void updateEmployeeById(@PathVariable int id,@RequestBody Employee employee)
	{
		this.employeeRepository.save(employee);
	}
	
	@DeleteMapping("/deleteEmployee/{id}")
	public void deleteEmployeeById(@PathVariable int id)
	{
		this.employeeRepository.deleteById(id);
	}
}
