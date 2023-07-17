package com.example.project.mentorfeedback;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentorFeedback")
@CrossOrigin("*")
public class MentorFeedbackController {
  @Autowired
  private MentorFeedbackService mentorFeedbackService;

  @GetMapping("/{empid}")
  public MentorFeedback getMentorFeedbackOfAnEmployee(@PathVariable Integer empid){
    return mentorFeedbackService.getMentorFeedbackOfAnEmployee(empid);
  }

  @PostMapping("/create")
  public void addMentorFeedbackForEmployee(@RequestBody MentorFeedback mentorFeedback){
    this.mentorFeedbackService.addMentorFeedbackForEmployee(mentorFeedback);
  }

  @PutMapping("/update")
  public void updateMentorFeedback(@RequestBody MentorFeedback mentorFeedback){
    this.mentorFeedbackService.updateMentorFeedback(mentorFeedback);
  }
}
