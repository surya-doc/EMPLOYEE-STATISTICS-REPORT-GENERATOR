package com.example.project.hrfeedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/hrFeedback")
@CrossOrigin("*")
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
