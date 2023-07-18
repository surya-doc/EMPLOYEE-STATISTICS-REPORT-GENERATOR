package com.example.project.team;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
  public ResponseEntity<Team> getTeamById(@PathVariable int id) throws ResoruceNotFoundException {
    return this.teamService.getTeamById(id);
  }
  @PostMapping("/create")
  public ResponseEntity<String> addTeam(@RequestBody Team team) throws ResoruceNotFoundException {
    return this.teamService.addTeam(team);
  }

  @PutMapping("/update")
  public ResponseEntity<String> updateTeam(@RequestBody Team team) throws ResoruceNotFoundException {
    return this.teamService.updateTeam(team);
  }
}
