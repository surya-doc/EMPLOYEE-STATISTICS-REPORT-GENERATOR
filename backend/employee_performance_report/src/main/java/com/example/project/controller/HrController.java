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

import com.example.project.model.Hr;
import com.example.project.repository.HrRepoitory;


@RestController
@RequestMapping("/Hr")
public class HrController {
	@Autowired
	private HrRepoitory hrRepository;
	
	@GetMapping("/")
	public List<Hr> getAllEmployees()
	{
		return this.hrRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public Hr getHrById(@PathVariable int id)
	{
		return this.hrRepository.findById(id).orElseThrow(null);
	}
	
	@PostMapping("/createHr")
	public void createEmployee(@RequestBody Hr hr)
	{
		this.hrRepository.save(hr);
	}
	
	@PutMapping("/updateHr/{id}")
	public void updateEmployeeById(@PathVariable int id,@RequestBody Hr hr)
	{
		this.hrRepository.save(hr);
	}
	
	@DeleteMapping("/deleteHr/{id}")
	public void deleteHrById(@PathVariable int id)
	{
		this.hrRepository.deleteById(id);
	}
}
