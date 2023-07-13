package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "mentorFeedback")
public class MentorFeedback {
  @Id
  private Integer empid;

  private Integer mentorid;

  private Integer teamid;

  private Integer communication;

  private Integer behaviour;

  private Integer responsibility;

  private Integer deadline;

  private Integer workload;

  private Integer extrawork;

  public Integer getEmpid() {
    return this.empid;
  }

  public Integer getMentorid() {
    return this.mentorid;
  }

  public Integer getTeamid() {
    return this.teamid;
  }

  public Integer getCommunication() {
    return this.communication;
  }

  public Integer getBehaviour() {
    return this.behaviour;
  }

  public Integer getResponsibility() {
    return this.responsibility;
  }

  public Integer getDeadline() {
    return this.deadline;
  }

  public Integer getWorkload() {
    return this.workload;
  }

  public Integer getExtrawork() {
    return this.extrawork;
  }

  public void setEmpid(Integer empid) {
    this.empid = empid;
  }

  public void setMentorid(Integer mentorid) {
    this.mentorid = mentorid;
  }

  public void setTeamid(Integer teamid) {
    this.teamid = teamid;
  }

  public void setCommunication(Integer communication) {
    this.communication = communication;
  }

  public void setBehaviour(Integer behaviour) {
    this.behaviour = behaviour;
  }

  public void setResponsibility(Integer responsibility) {
    this.responsibility = responsibility;
  }

  public void setDeadline(Integer deadline) {
    this.deadline = deadline;
  }

  public void setWorkload(Integer workload) {
    this.workload = workload;
  }

  public void setExtrawork(Integer extrawork) {
    this.extrawork = extrawork;
  }
}
