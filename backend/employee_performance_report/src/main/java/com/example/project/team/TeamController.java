package com.example.project.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
@CrossOrigin("*")
public class TeamController {
  @Autowired
  private TeamService teamService;

  @GetMapping("/")
  public List<Team> getAllTeams()
  {
    return this.teamService.getAllTeams();
  }

  @GetMapping("/{id}")
  public Team getTeamById(@PathVariable int id)
  {
    return this.teamService.getTeamById(id);
  }
  @PostMapping("/create")
  public void addTeam(@RequestBody Team team){
    this.teamService.addTeam(team);
  }

  @PutMapping("/update")
  public void updateTeam(@RequestBody Team team){
    this.teamService.updateTeam(team);
  }
}
