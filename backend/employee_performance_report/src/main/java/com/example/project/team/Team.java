package com.example.project.team;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "team")
public class Team {
  @Id
  private Integer teamid;

  private Integer mentorid;

  private String team_description;

  public Integer getTeamid() {
    return this.teamid;
  }

  public Integer getMentorid() {
    return this.mentorid;
  }

  public String getTeam_description() {
    return this.team_description;
  }

  public void setTeamid(Integer teamid) {
    this.teamid = teamid;
  }

  public void setMentorid(Integer mentorid) {
    this.mentorid = mentorid;
  }

  public void setTeam_description(String team_description) {
    this.team_description = team_description;
  }

public Team(Integer teamid, Integer mentorid, String team_description) {
	super();
	this.teamid = teamid;
	this.mentorid = mentorid;
	this.team_description = team_description;
}

public Team() {
	super();
	// TODO Auto-generated constructor stub
}

@Override
public String toString() {
	return "Team [teamid=" + teamid + ", mentorid=" + mentorid + ", team_description=" + team_description + "]";
}
  
  
}
