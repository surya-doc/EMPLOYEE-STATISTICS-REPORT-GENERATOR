package com.example.project.employeedetails;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employeeDetail")
public class EmployeeDetailsController {
	@Autowired
	private EmployeeDetailsService employeeDetailsService;
	
	
	@GetMapping("/{id}")
	public EmployeeDetails getEmployeeDetailById(@PathVariable int id)
	{
		return this.employeeDetailsService.getEmployeeDetailsById(id);
	}
	
	@PostMapping("/create")
	public void createEmployeeDetail(@RequestBody EmployeeDetails employeeDetails)
	{
		this.employeeDetailsService.createEmployeeDetails(employeeDetails);
	}
	
	@PutMapping("/update")
	public void updateEmployeeDetailsById(@RequestBody EmployeeDetails employeeDetails)
	{
		this.employeeDetailsService.updateEmployeeDetailsById(employeeDetails);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteEmployeeDetailsById(@PathVariable int id)
	{
		this.employeeDetailsService.deleteEmployeeDetailsById(id);
	}
}
