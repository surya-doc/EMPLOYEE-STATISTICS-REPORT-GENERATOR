package com.example.project.team;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
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
    @Autowired
    private EmployeeRepository employeeRepository;
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
            throw new ResoruceNotFoundException("Team Already Exists");
        }
        Employee employee=employeeRepository.findById(team.getMentorid()).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +id));
        this.teamRepository.save(team);
        return ResponseEntity.ok("Created Team");
    }
    public ResponseEntity<String> updateTeam(Team team) throws ResoruceNotFoundException {
        int id=team.getTeamid();
        Team emp = this.teamRepository.findById(id).orElseThrow(()->new ResoruceNotFoundException("Team doesnt exist with id :" +id));
        this.teamRepository.save(team);
        return ResponseEntity.ok("Updated Team");
    }

    public ResponseEntity<Team> getteambymentorid(int mentorid) throws ResoruceNotFoundException
    {
        Employee mentor = employeeRepository.findById(mentorid).orElseThrow(()->new ResoruceNotFoundException("Mentor doesnt exist with id :" +mentorid));
        List<Team> team = teamRepository.getteambymentorid(mentorid);
        if(team.size()==0)
        {
            throw new ResoruceNotFoundException("Team Dont Exists");
        }
        return ResponseEntity.ok(team.get(0));
    }
}
