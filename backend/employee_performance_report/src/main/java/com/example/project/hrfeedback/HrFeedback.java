package com.example.project.hrfeedback;

import jakarta.persistence.*;

@Entity(name = "hrFeedback")
@Table(name = "hrFeedback")
public class HrFeedback {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int feedbackid;

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

	public HrFeedback(Integer empid, Integer hrid, Integer communication, Integer behaviour, Integer extraactivity) {
		super();
		this.empid = empid;
		this.hrid = hrid;
		this.communication = communication;
		this.behaviour = behaviour;
		this.extraactivity = extraactivity;
	}

	public HrFeedback() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "HrFeedback [empid=" + empid + ", hrid=" + hrid + ", communication=" + communication + ", behaviour="
				+ behaviour + ", extraactivity=" + extraactivity + "]";
	}
	
	
}
