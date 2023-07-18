package com.example.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResoruceNotFoundException extends Exception{

    private static final long serialVersionUID = 1L;

    public ResoruceNotFoundException(String message) {
        super(message);
    }
}