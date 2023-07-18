package com.example.project.login;

import com.example.project.exception.ResoruceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("")
    public ResponseEntity<Profile> getProfile(@RequestBody LoginInfo loginInfo) throws ResoruceNotFoundException {
        String name=loginInfo.getEmail();
        String password=loginInfo.getPassword();
        String type=loginInfo.getType();
        return this.loginService.getProfile(name,password,type);
    }
}
