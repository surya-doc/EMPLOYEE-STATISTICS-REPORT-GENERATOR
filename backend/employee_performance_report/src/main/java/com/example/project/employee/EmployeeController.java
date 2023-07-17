package com.example.project.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping("/")
	public List<Employee> getAllEmployees()
	{
		return this.employeeService.getAllEmployees();
	}
	
	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable int id) {	return this.employeeService.getEmployeeById(id);	}
	
	@PostMapping("/create")
	public void createEmployee(@RequestBody Employee employee)
	{
		this.employeeService.createEmployee(employee);
	}
	
	@PutMapping("/update")
	public void updateEmployeeById(@RequestBody Employee employee)
	{
		this.employeeService.updateEmployeeById(employee);
	}

	@GetMapping("/byteam/{teamid}")
	public List<Employee> getEmployeeByTeam(@PathVariable int teamid) {	return this.employeeService.getEmployeeByTeam(teamid);	}

	@DeleteMapping("/delete/{id}")
	public void deleteEmployeeById(@PathVariable int id)
	{
		this.employeeService.deleteEmployeeById(id);
	}
}
