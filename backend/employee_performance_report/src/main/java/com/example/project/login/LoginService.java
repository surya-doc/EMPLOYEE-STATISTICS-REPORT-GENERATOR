package com.example.project.login;

import com.example.project.employeedetails.EmployeeDetails;
import com.example.project.employeedetails.EmployeeDetailsRepository;
import com.example.project.exception.ResoruceNotFoundException;
import com.example.project.hr.Hr;
import com.example.project.hr.HrRepository;
import com.example.project.mentor.Mentor;
import com.example.project.mentor.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {
    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;
    @Autowired
    private HrRepository hrRepository;
    @Autowired
    private MentorRepository mentorRepository;

    public ResponseEntity<Profile> getProfile(String email, String password, @org.jetbrains.annotations.NotNull String type) throws ResoruceNotFoundException
    {
        Profile profile = new Profile();
        if(type.equals("hr"))
        {
            List<Hr> hr=hrRepository.getHrByDetails(email,password);
            if(hr.size()==0)
            {
                throw new ResoruceNotFoundException("Invalid Credentials");
            }
            profile.setEmailid(hr.get(0).getEmail());
            profile.setId(hr.get(0).getHrid());
            profile.setName(hr.get(0).getName());
        }
        else if (type.equals("mentor")) {
            List<Mentor> mentor=mentorRepository.getMentorByDetails(email,password);
            if(mentor.size()==0)
            {
                throw new ResoruceNotFoundException("Invalid Credentials");
            }
            profile.setEmailid(mentor.get(0).getEmail());
            profile.setId(mentor.get(0).getMentorid());
            profile.setName(mentor.get(0).getName());
        }
        else if (type.equals("employee")){
            List<EmployeeDetails> employee=employeeDetailsRepository.getEmpByDetails(email,password);
            if(employee.size()==0)
            {
                throw new ResoruceNotFoundException("Invalid Credentials");
            }
            profile.setEmailid(employee.get(0).getEmail());
            profile.setId(employee.get(0).getEmpid());
            profile.setName(employee.get(0).getName());
        }
        else
        {
            throw new ResoruceNotFoundException("Invalid Credentials");
        }
        return ResponseEntity.ok(profile);
    }
}
