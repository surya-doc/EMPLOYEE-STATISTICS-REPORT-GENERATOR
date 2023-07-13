package com.example.project.controller;

import com.example.project.model.MentorFeedback;
import com.example.project.model.PeerFedback;
import com.example.project.repository.PeerFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PeerFeedbackController {
  @Autowired
  private PeerFeedbackRepository peerFeedbackRepository;

//  @GetMapping("/peerfeedback/{empid}")
//  private List<PeerFedback>getPeerFeedbackOfAnEmployee(@PathVariable Integer empid){
//    return peerFeedbackRepository.findById(empid).orElseThrow()
//  }

  @PostMapping("/peerfeedback")
  public void addPeerFeedback(@RequestBody PeerFedback peerFedback){
    peerFeedbackRepository.save(peerFedback);
  }

  @PutMapping("/peerfeedback/update/{empid}")
  public void updateMentorFeedback(@PathVariable Integer empid, @RequestBody PeerFedback peerFedback){
    peerFeedbackRepository.save(peerFedback);
  }
}
