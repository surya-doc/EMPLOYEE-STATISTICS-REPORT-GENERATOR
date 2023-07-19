package com.example.project.mentorfeedback;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "mentorFeedback")
public class MentorFeedback {
  @Id
  private Integer empid;

  private Integer mentorid;

  private Integer mentorteamid;

  private Integer communication;

  private Integer behaviour;

  private Integer responsibility;

  private Integer deadline;

  private Integer workload;

  private Integer extrawork;

  private Integer empteamid;

  public Integer getEmpid() {
    return this.empid;
  }

  public Integer getMentorid() {
    return this.mentorid;
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

  public MentorFeedback(Integer empid, Integer mentorid, Integer mentorteamid, Integer communication, Integer behaviour,
                        Integer responsibility, Integer deadline, Integer workload, Integer extrawork, Integer empteamid) {
    super();
    this.empid = empid;
    this.mentorid = mentorid;
    this.mentorteamid = mentorteamid;
    this.communication = communication;
    this.behaviour = behaviour;
    this.responsibility = responsibility;
    this.deadline = deadline;
    this.workload = workload;
    this.extrawork = extrawork;
    this.empteamid = empteamid;
  }

  public MentorFeedback() {
    super();
    // TODO Auto-generated constructor stub
  }

  @Override
  public String toString() {
    return "MentorFeedback [empid=" + empid + ", mentorid=" + mentorid + ", mentorteamid=" + mentorteamid + ", communication="
            + communication + ", behaviour=" + behaviour + ", responsibility=" + responsibility + ", deadline="
            + deadline + ", workload=" + workload + ", extrawork=" + extrawork + ", empteamid=" + empteamid + "]";
  }


  public Integer getMentorteamid() {
    return this.mentorteamid;
  }

  public Integer getEmpteamid() {
    return this.empteamid;
  }

  public void setMentorteamid(Integer mentorteamid) {
    this.mentorteamid = mentorteamid;
  }

  public void setEmpteamid(Integer empteamid) {
    this.empteamid = empteamid;
  }
}
