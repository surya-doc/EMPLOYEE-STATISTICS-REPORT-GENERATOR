package com.example.project.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("")
    public Profile getProfile(@RequestBody LoginInfo loginInfo)
    {
        String name=loginInfo.getEmail();
        String password=loginInfo.getPassword();
        String type=loginInfo.getType();
//        System.out.println(name);
//        System.out.println(password);
//        System.out.println(type);
        return this.loginService.getProfile(name,password,type);
    }
}
