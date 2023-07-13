package com.example.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "hrFeedback")
public class HrFeedback {
  @Id
  private Integer empid;

  private Integer hrid;

  private Integer communication;

  private Integer behaviour;

  private Integer extraactivity;

  public Integer getEmpid() {
    return this.empid;
  }

  public Integer getHrid() {
    return this.hrid;
  }

  public Integer getCommunication() {
    return this.communication;
  }

  public Integer getBehaviour() {
    return this.behaviour;
  }

  public Integer getExtraactivity() {
    return this.extraactivity;
  }

  public void setEmpid(Integer empid) {
    this.empid = empid;
  }

  public void setHrid(Integer hrid) {
    this.hrid = hrid;
  }

  public void setCommunication(Integer communication) {
    this.communication = communication;
  }

  public void setBehaviour(Integer behaviour) {
    this.behaviour = behaviour;
  }

  public void setExtraactivity(Integer extraactivity) {
    this.extraactivity = extraactivity;
  }
}
