package com.example.project.peerfeedback;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "peerFeedback")
public class PeerFedback {
    @Id
    private Integer feedbackid;

    private Integer empid;
    private Integer peerid;
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

    public Integer getFeedbackid() {
        return this.feedbackid;
    }

    public Integer getPeerid() {
        return this.peerid;
    }

    public void setFeedbackid(Integer feedbackid) {
        this.feedbackid = feedbackid;
    }

    public void setPeerid(Integer peerid) {
        this.peerid = peerid;
    }

    public PeerFedback() {
        super();
        // TODO Auto-generated constructor stub
    }

    public PeerFedback(Integer feedbackid, Integer empid, Integer peerid, Integer teamid, Integer communication, Integer behaviour, Integer responsibility) {
        super();
        this.empid = empid;
        this.teamid = teamid;
        this.communication = communication;
        this.behaviour = behaviour;
        this.responsibility = responsibility;
        this.feedbackid = feedbackid;
        this.peerid = peerid;
    }

    public String toString() {
        return "PeerFedback(feedbackid=" + this.getFeedbackid() + ", empid=" + this.getEmpid() + ", peerid=" + this.getPeerid() + ", teamid=" + this.getTeamid() + ", communication=" + this.getCommunication() + ", behaviour=" + this.getBehaviour() + ", responsibility=" + this.getResponsibility() + ")";
    }
}
