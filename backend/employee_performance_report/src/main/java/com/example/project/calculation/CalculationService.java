package com.example.project.calculation;

import com.example.project.employeedetails.EmployeeDetails;
import com.example.project.employeedetails.EmployeeDetailsRepository;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.hrfeedback.HrFeedback;
import com.example.project.hrfeedback.HrFeedbackRepository;
import com.example.project.mentorfeedback.MentorFeedback;
import com.example.project.mentorfeedback.MentorFeedbackRepository;
import com.example.project.peerfeedback.PeerFedback;
import com.example.project.peerfeedback.PeerFeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class CalculationService {
    @Autowired
    private HrFeedbackRepository hrFeedbackRepository;

    @Autowired
    private MentorFeedbackRepository mentorFeedbackRepository;

    @Autowired
    private PeerFeedbackRepository peerFeedbackRepository;

    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;

    @Autowired
    private CalculationRepository calculationRepository;

    // Maximum possible value for each field
    private static final int MAX_FIELD_VALUE = 5;

    public static double calculateApproximatePercentile(Calculation employee, int totalTeamMembers) {
        double overallScore = calculateOverallScore(employee);
        double percentile = (overallScore / 7) * 100;
        return Math.min(Math.max(percentile, 0.0), 100.0);
    }

    private static double calculateOverallScore(Calculation employee) {
        double behaviourNormalized = normalizeValue(employee.getBehaviour());
        double communicationNormalized = normalizeValue(employee.getCommunication());
        double extraWorkNormalized = normalizeValue(employee.getExtrawork());
        double responsibilityNormalized = normalizeValue(employee.getResponsibility());
        double deadlineNormalized = normalizeValue(employee.getDeadline());
        double workloadNormalized = normalizeValue(employee.getWorkload());
        double extraActivityNormalized = normalizeValue(employee.getExtraactivity());

        return (behaviourNormalized +
                communicationNormalized +
                extraWorkNormalized +
                responsibilityNormalized +
                deadlineNormalized +
                workloadNormalized +
                extraActivityNormalized);
    }

    // Normalize the value to be between 0 and 1
    private static double normalizeValue(int value) {
        return (double) value / MAX_FIELD_VALUE;
    }

    Calculation a = new Calculation();

    public ResponseEntity<Calculation> getCalculatedValues(int empid) throws ResoruceNotFoundException
    {
        List<HrFeedback> hrFeedback = this.hrFeedbackRepository.getHrfeedbackByEmpId(empid);

        List<MentorFeedback> mentorFeedback = this.mentorFeedbackRepository.getHrfeedbackByEmpId(empid);

        List<PeerFedback> peerFedbacks = this.peerFeedbackRepository.getPeerFeedbackOfAnEmployee(empid);


        System.out.println(hrFeedback);
        System.out.println(mentorFeedback);
        System.out.println(peerFedbacks);

        int hrBehaviour = 0;
        int hrCommunication = 0;
        int hrExtraWork = 0;

        int mentorCommunicaion = 0;
        int mentorBehaviour = 0;
        int mentorResponsibility = 0;
        int mentorDeadLines = 0;
        int mentorWorkLoad = 0;
        int mentorExtraWork = 0;

        int peerCommunication = 0;
        int peerBehaviour = 0;
        int peerResponsibility = 0;

        for(HrFeedback feedback: hrFeedback)
        {
            hrCommunication += feedback.getCommunication();
            hrBehaviour += feedback.getBehaviour();
            hrExtraWork += feedback.getExtraactivity();
        }

        for(MentorFeedback feedback: mentorFeedback){
            mentorCommunicaion += feedback.getCommunication();
            mentorBehaviour += feedback.getBehaviour();
            mentorResponsibility += feedback.getResponsibility();
            mentorDeadLines += feedback.getDeadline();
            mentorWorkLoad += feedback.getWorkload();
            mentorExtraWork += feedback.getExtrawork();
        }

        for(PeerFedback feedback: peerFedbacks){
            peerCommunication += feedback.getCommunication();
            peerBehaviour += feedback.getBehaviour();
            peerResponsibility += feedback.getResponsibility();
        }

        int behaviour;
        int communication;
        int extrawork;
        int responsibility;
        int deadline;
        int workload;
        int extraactivity;

        int hrFeedbackSize = hrFeedback.size();
        int peerFeedbackSize = peerFedbacks.size();
        int mentorFeedbackSize = mentorFeedback.size();

        hrCommunication /= hrFeedbackSize;
        hrBehaviour /= hrFeedbackSize;
        hrExtraWork /= hrFeedbackSize;

        mentorCommunicaion /= mentorFeedbackSize;
        mentorBehaviour /= mentorFeedbackSize;
        mentorResponsibility /= mentorFeedbackSize;
        mentorDeadLines /= mentorFeedbackSize;
        mentorWorkLoad /= mentorFeedbackSize;
        mentorExtraWork /= mentorFeedbackSize;

        peerCommunication /= peerFeedbackSize;
        peerBehaviour /= peerFeedbackSize;
        peerResponsibility /= peerFeedbackSize;

        communication = ((hrCommunication+mentorCommunicaion+peerCommunication)/3);
        behaviour = ((hrBehaviour+mentorBehaviour+peerBehaviour)/3);
        responsibility = ((mentorResponsibility+peerResponsibility)/2);
        extraactivity = hrExtraWork;
        deadline = mentorDeadLines;
        workload = mentorWorkLoad;
        extrawork = mentorExtraWork;


        a.setEmpid(empid);
        a.setCommunication(communication);
        a.setBehaviour(behaviour);
        a.setExtrawork(extrawork);
        a.setDeadline(deadline);
        a.setWorkload(workload);
        a.setExtraactivity(extraactivity);
        a.setResponsibility(responsibility);

        double percentile = calculateApproximatePercentile(a, 4);
        System.out.println(percentile);

        a.setPercentile(percentile);

        calculationRepository.save(a);

        return ResponseEntity.ok(a);
    }

    public List<Calculation> getStatByTeam(int teamid) throws ResoruceNotFoundException
    {
        List<Calculation> calculationList = new ArrayList<>();
        List<EmployeeDetails> employeeDetailsList=employeeDetailsRepository.getemployeeBYTeam(teamid,"member");
        for(EmployeeDetails employeeDetails: employeeDetailsList)
        {
            int empid= employeeDetails.getEmpid();
            Optional<Calculation> calculation=this.calculationRepository.findById(empid);
            if(calculation.isEmpty())
            {
                continue;
            }
            Calculation calculation1 = this.calculationRepository.findById(empid).orElseThrow();
            calculationList.add(calculation1);
        }
        return calculationList;
    }

    public List<Calculation> getOrderedStats() throws ResoruceNotFoundException
    {
        List<Calculation> calculationList = this.calculationRepository.getOrderedStats();
        return calculationList;
    }
}
