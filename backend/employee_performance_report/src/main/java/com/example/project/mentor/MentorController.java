package com.example.project.mentor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentors")
@CrossOrigin("*")
public class MentorController {
  @Autowired
  private MentorService mentorService;

  @GetMapping("/")
  public List<Mentor> getMentor(){
    return mentorService.getMentor();
  }

  @GetMapping("/{id}")
  public Mentor getMentorById(@PathVariable Integer id){
    return mentorService.getMentorById(id);
  }

  @PostMapping("/create")
  public void addMentor(@RequestBody Mentor mentor){
    this.mentorService.addMentor(mentor);
  }

  @PutMapping("/update")
  public void updateMentor(@RequestBody Mentor mentor){
    this.mentorService.updateMentor(mentor);
  }

  @DeleteMapping("/delete/{id}")
  public void deleteMentor(@PathVariable Integer id){
    this.mentorService.deleteMentor(id);
  }

  @GetMapping("/byteam/{id}")
  public Mentor getMentorByTeam(@PathVariable int id) { return this.mentorService.getMentorByTeam(id);  }
}
