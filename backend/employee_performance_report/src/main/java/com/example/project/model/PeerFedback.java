package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "peerFeedback")
public class PeerFedback {
  @Id
  private Integer empid;

  private Integer teamid;

  private Integer communication;

  private Integer behaviour;

  private Integer responsibility;

  public Integer getEmpid() {
    return this.empid;
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

  public void setEmpid(Integer empid) {
    this.empid = empid;
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
}
