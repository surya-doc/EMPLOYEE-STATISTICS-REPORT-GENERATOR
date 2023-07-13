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

import com.example.project.model.HrFeedback;
import com.example.project.repository.HrFeedbackRepository;

@RestController
@RequestMapping("/HrFeedback")
public class HrFeedbackController {
	@Autowired
	private HrFeedbackRepository hrFeedbackRepository;
	
	@GetMapping("/{id}")
	public HrFeedback getHrById(@PathVariable int id)
	{
		return this.hrFeedbackRepository.findById(id).orElseThrow(null);
	}
	
	@PostMapping("/createHrFeedback")
	public void createEmployee(@RequestBody HrFeedback hr)
	{
		this.hrFeedbackRepository.save(hr);
	}
	
	@PutMapping("/updateHrFeedback/{id}")
	public void updateEmployeeById(@PathVariable int id,@RequestBody HrFeedback hr)
	{
		this.hrFeedbackRepository.save(hr);
	}
	
	@DeleteMapping("/deleteHrFeedback/{id}")
	public void deleteHrById(@PathVariable int id)
	{
		this.hrFeedbackRepository.deleteById(id);
	}
}
