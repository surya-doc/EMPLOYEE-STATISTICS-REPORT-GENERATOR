package com.example.project.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class TeamService {
    @Autowired
    private TeamRepository teamRepository;
    public List<Team> getAllTeams()
    {
        return this.teamRepository.findAll();
    }
    public Team getTeamById(@PathVariable int id)
    {
        return this.teamRepository.findById(id).orElseThrow(null);
    }
    public void addTeam(@RequestBody Team team){
        teamRepository.save(team);
    }
    public void updateTeam(@RequestBody Team team){
        teamRepository.save(team);
    }
}
