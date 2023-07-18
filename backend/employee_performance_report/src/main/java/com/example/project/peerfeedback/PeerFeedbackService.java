package com.example.project.peerfeedback;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.mentor.MentorRepository;
import com.example.project.team.Team;
import com.example.project.team.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PeerFeedbackService {
    @Autowired
    private PeerFeedbackRepository peerFeedbackRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private EmployeeRepository employeeRepository;



    public ResponseEntity<List<PeerFedback>> getPeerFeedbackByID(Integer empid) throws ResoruceNotFoundException {
        List<PeerFedback> peerFedbacks = peerFeedbackRepository.getPeerFeedbackOfAnEmployee(empid);
        if(peerFedbacks.size()==0)
        {
            throw new ResoruceNotFoundException("No peer feedback available");
        }
        return ResponseEntity.ok(peerFedbacks);
    }

    public ResponseEntity<String> addPeerFeedback(PeerFedback peerFedback) throws ResoruceNotFoundException {
        int empid=peerFedback.getEmpid();
        int peerid=peerFedback.getPeerid();
        List<PeerFedback> peerFedbacks = peerFeedbackRepository.getonefeedback(empid,peerid);
        if(peerFedbacks.size()!=0)
        {
            throw new ResoruceNotFoundException("feedback already given");
        }
        Optional<Employee> emp = employeeRepository.findById(empid);
        if(emp.isEmpty())
        {
            throw new ResoruceNotFoundException("invalid employee");
        }
        Employee employee = employeeRepository.findById(empid).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +empid));
        Team team = teamRepository.findById(peerFedback.getTeamid()).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +peerFedback.getTeamid()));
        Employee peer = employeeRepository.findById(peerid).orElseThrow(()->new ResoruceNotFoundException("Employee doesnt exist with id :" +peerid));
        this.peerFeedbackRepository.save(peerFedback);
        return ResponseEntity.ok("Feedback Added");
    }

    public ResponseEntity<String> updatePeerFeedback(PeerFedback peerFedback) throws ResoruceNotFoundException {
        int empid=peerFedback.getEmpid();
        int peerid=peerFedback.getPeerid();
        List<PeerFedback> peerFedbacks = peerFeedbackRepository.getonefeedback(empid,peerid);
        if(peerFedbacks.size()!=0)
        {
            throw new ResoruceNotFoundException("feedback already given");
        }
        Optional<Employee> emp = employeeRepository.findById(empid);
        if(emp.isEmpty())
        {
            throw new ResoruceNotFoundException("invalid employee");
        }
        this.peerFeedbackRepository.save(peerFedback);
        return ResponseEntity.ok("Feedback Updated");
    }
}
