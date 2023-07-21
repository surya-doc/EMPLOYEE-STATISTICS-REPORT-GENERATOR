package com.example.project.login;

import com.example.project.employee.Employee;
import com.example.project.employee.EmployeeRepository;
import com.example.project.employeedetails.EmployeeDetails;
import com.example.project.employeedetails.EmployeeDetailsRepository;
import com.example.project.exception.ResoruceNotFoundException;
import org.jasypt.encryption.StringEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {
    @Autowired
    private EmployeeDetailsRepository employeeDetailsRepository;
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private StringEncryptor stringEncryptor;

    @Autowired
    public LoginService(EmployeeDetailsRepository employeeDetailsRepository,
                        EmployeeRepository employeeRepository,
                        StringEncryptor stringEncryptor) {
        this.employeeDetailsRepository = employeeDetailsRepository;
        this.employeeRepository = employeeRepository;
        this.stringEncryptor = stringEncryptor; // Initialize the StringEncryptor
    }

    public ResponseEntity<Profile> getProfile(String email, String password, @org.jetbrains.annotations.NotNull String type) throws ResoruceNotFoundException {
        Profile profile = new Profile();
        List<EmployeeDetails> employee = employeeDetailsRepository.getEmpByDetails(email, type);
        if (employee.size() == 0) {
            throw new ResoruceNotFoundException("Invalid Credentials");
        }

        // Decrypt the password retrieved from the database
        String decryptedPassword = stringEncryptor.decrypt(employee.get(0).getPassword());

        // Compare decryptedPassword with the provided password
        if (!decryptedPassword.equals(password)) {
            throw new ResoruceNotFoundException("Invalid Credentials");
        }

        profile.setEmailid(employee.get(0).getEmail());
        profile.setId(employee.get(0).getEmpid());
        Employee emp = employeeRepository.findById(employee.get(0).getEmpid()).orElseThrow();
        profile.setName(emp.getName());
        return ResponseEntity.ok(profile);
    }
}
