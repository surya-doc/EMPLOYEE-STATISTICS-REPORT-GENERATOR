package com.example.project.controller;

import com.example.project.model.Team;
import com.example.project.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeamController {
  @Autowired
  private TeamRepository teamRepository;

//  @GetMapping("/teammembers")
//  public

  @PostMapping("/teammember")
  public void addTeamMember(@RequestBody Team team){
    teamRepository.save(team);
  }

  @PutMapping("/teammember/update")
  public void updateTeam(@RequestBody Team team){
    teamRepository.save(team);
  }
}
