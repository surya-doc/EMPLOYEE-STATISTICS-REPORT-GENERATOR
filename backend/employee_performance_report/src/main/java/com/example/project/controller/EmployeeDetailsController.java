package com.example.project.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.project.model.EmployeeDetails;
import com.example.project.repository.EmployeeDetailsRepository;

@RestController
@RequestMapping("/employeeDetail")
public class EmployeeDetailsController {
	@Autowired
	private EmployeeDetailsRepository employeeDetailsRepository;
	
	
	@GetMapping("/{id}")
	public EmployeeDetails getEmployeeDetailById(@PathVariable int id)
	{
		return this.employeeDetailsRepository.findById(id).orElseThrow(null);
	}
	
	@PostMapping("/createEmployeeDetail")
	public void createEmployeeDetail(@RequestBody EmployeeDetails employeeDetails)
	{
		this.employeeDetailsRepository.save(employeeDetails);
	}
	
	@PutMapping("/updateEmployeeDetail/{id}")
	public void updateEmployeeDetailsById(@PathVariable int id,@RequestBody EmployeeDetails employeeDetails)
	{
		this.employeeDetailsRepository.save(employeeDetails);
	}
	
	@DeleteMapping("/deleteEmployeeDetail/{id}")
	public void deleteEmployeeDetailsById(@PathVariable int id)
	{
		this.employeeDetailsRepository.deleteById(id);
	}
}
