package com.example.project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AppConfig {

//    @Bean
//    public UserDetailsService userDetailsService()
//    {
//        UserDetails user1 = User.builder().username("Dhiraj").password(passwordEncoder().encode("abc")).roles("hr").build();
//        UserDetails user2 = User.builder().username("Surya").password(passwordEncoder().encode("abc")).roles("mentor").build();
//        UserDetails user3 = User.builder().username("test").password(passwordEncoder().encode("abc")).roles("member").build();
//
//        return new InMemoryUserDetailsManager(user1,user2,user3);
//    }

    @Bean
    public PasswordEncoder passwordEncoder()
    {
        return new BCryptPasswordEncoder();
    }

}
