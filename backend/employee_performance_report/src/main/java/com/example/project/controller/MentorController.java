package com.example.project.controller;

import com.example.project.model.Mentor;
import com.example.project.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MentorController {
  @Autowired
  private MentorRepository mentorRepository;

  @GetMapping("/mentors")
  public List<Mentor> getMentor(){
    return mentorRepository.findAll();
  }

  @GetMapping("/mentors/{id}")
  public Mentor getMentorById(@PathVariable Integer id){
    return mentorRepository.findById(id).orElseThrow();
  }

  @PostMapping("/mentor")
  public void addMentor(@RequestBody Mentor mentor){
    mentorRepository.save(mentor);
  }

  @PutMapping("/mentor/update")
  public void updateMentor(@RequestBody Mentor mentor){
    mentorRepository.save(mentor);
  }

  @DeleteMapping("/mentor/delete/{id}")
  public void deleteMentor(@PathVariable Integer id){
    mentorRepository.deleteById(id);
  }
}
