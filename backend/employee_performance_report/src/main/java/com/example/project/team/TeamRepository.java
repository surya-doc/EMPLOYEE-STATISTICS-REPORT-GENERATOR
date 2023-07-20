package com.example.project.team;

import com.example.project.team.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {
    @Query("Select emp from team emp where emp.mentorid = ?1")
    public List<Team> getteambymentorid(int mentorid);
}
