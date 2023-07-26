package com.example.project.OTPManager;

import com.example.project.employeedetails.EmployeeDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/otp")
@CrossOrigin("*")
public class OtpController {
    @Autowired
    private Otp otp;

    @PostMapping("/getotp")
    public String generateOtpRequest(@RequestParam String email){
        otp.generateOtp(email);
        return "Otp Sent";
    }

    @PostMapping("/validate")
    public boolean checkOtp(@RequestParam String key){
        System.out.println("****************************************************************************************************************************************");
//        System.out.println(email);
//        System.out.println(otpNumber);
        boolean a = otp.validateOtp(key);
        return a;
    }
}
