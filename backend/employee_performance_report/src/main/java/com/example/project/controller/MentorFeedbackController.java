package com.example.project.controller;

import com.example.project.model.MentorFeedback;
import com.example.project.repository.MentorFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MentorFeedbackController {
  @Autowired
  private MentorFeedbackRepository mentorFeedbackRepository;

  @GetMapping("/mentorfeedback")
  public List<MentorFeedback> getAllFeedbackOfMentor(){
    return mentorFeedbackRepository.findAll();
  }

  @GetMapping("/mentorfeedback/{empid}")
  public MentorFeedback getMentorFeedbackOfAnEmployee(@PathVariable Integer empid){
    return mentorFeedbackRepository.findById(empid).orElseThrow();
  }

  @PostMapping("/mentorfeedback")
  public void addMentorFeedbackForEmployee(@RequestBody MentorFeedback mentorFeedback){
    mentorFeedbackRepository.save(mentorFeedback);
  }

  @PutMapping("/mentorfeedback/update/{empid}")
  public void updateMentorFeedback(@PathVariable Integer empid, @RequestBody MentorFeedback mentorFeedback){
    mentorFeedbackRepository.save(mentorFeedback);
  }
}
