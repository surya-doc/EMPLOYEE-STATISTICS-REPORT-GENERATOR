package com.example.project.team;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeamService {
    @Autowired
    private TeamRepository teamRepository;
    public List<Team> getAllTeams()
    {
        return this.teamRepository.findAll();
    }
    public ResponseEntity<Team> getTeamById(int id) throws ResoruceNotFoundException {
        Team team= this.teamRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        return ResponseEntity.ok(team);
    }
    public ResponseEntity<String> addTeam(Team team) throws ResoruceNotFoundException {
        int id = team.getTeamid();
        Optional<Team> emp=this.teamRepository.findById(id);
        System.out.println(emp);
        if(!emp.isEmpty())
        {
            throw new ResoruceNotFoundException("Employee Already Exists");
        }
        this.teamRepository.save(team);
        return ResponseEntity.ok("Created Team");
    }
    public ResponseEntity<String> updateTeam(Team team) throws ResoruceNotFoundException {
        int id=team.getTeamid();
        Team emp= this.teamRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.teamRepository.save(team);
        return ResponseEntity.ok("Updated Team");
    }
}
