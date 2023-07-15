package com.example.project.hrfeedback;

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
@RequestMapping("/hrFeedback")
public class HrFeedbackController {
	@Autowired
	private HrFeedbackService hrFeedbackService;
	
	@GetMapping("/{id}")
	public HrFeedback getHrFeedbackById(@PathVariable int id)
	{
		return this.hrFeedbackService.getHrFeedbackById(id);
	}
	
	@PostMapping("/create")
	public void createHrFeedback(@RequestBody HrFeedback hr)
	{
		this.hrFeedbackService.createHrFeedback(hr);
	}
	
	@PutMapping("/update")
	public void updateHrFeedbackById(@RequestBody HrFeedback hr)
	{
		this.hrFeedbackService.updateHrFeedbackById(hr);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteHrFeedbackById(@PathVariable int id)
	{
		this.hrFeedbackService.deleteHrFeedbackById(id);
	}
}
