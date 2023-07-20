package com.example.project.mentorfeedback;

import jakarta.persistence.*;

@Entity(name = "mentorFeedback")
@Table(name = "mentorFeedback")
public class MentorFeedback {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer feedbackid;
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

  public MentorFeedback(Integer feedbackid, Integer empid, Integer mentorid, Integer mentorteamid, Integer communication, Integer behaviour, Integer responsibility, Integer deadline, Integer workload, Integer extrawork, Integer empteamid) {
    this.feedbackid = feedbackid;
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
  }

  public Integer getFeedbackid() {
    return this.feedbackid;
  }

  public Integer getEmpid() {
    return this.empid;
  }

  public Integer getMentorid() {
    return this.mentorid;
  }

  public Integer getMentorteamid() {
    return this.mentorteamid;
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

  public Integer getEmpteamid() {
    return this.empteamid;
  }

  public void setFeedbackid(Integer feedbackid) {
    this.feedbackid = feedbackid;
  }

  public void setEmpid(Integer empid) {
    this.empid = empid;
  }

  public void setMentorid(Integer mentorid) {
    this.mentorid = mentorid;
  }

  public void setMentorteamid(Integer mentorteamid) {
    this.mentorteamid = mentorteamid;
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

  public void setEmpteamid(Integer empteamid) {
    this.empteamid = empteamid;
  }

  public String toString() {
    return "MentorFeedback(feedbackid=" + this.getFeedbackid() + ", empid=" + this.getEmpid() + ", mentorid=" + this.getMentorid() + ", mentorteamid=" + this.getMentorteamid() + ", communication=" + this.getCommunication() + ", behaviour=" + this.getBehaviour() + ", responsibility=" + this.getResponsibility() + ", deadline=" + this.getDeadline() + ", workload=" + this.getWorkload() + ", extrawork=" + this.getExtrawork() + ", empteamid=" + this.getEmpteamid() + ")";
  }
}
