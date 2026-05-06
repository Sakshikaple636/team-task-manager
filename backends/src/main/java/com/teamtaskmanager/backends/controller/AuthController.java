package com.teamtaskmanager.backends.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.teamtaskmanager.backends.dto.AuthResponse;
import com.teamtaskmanager.backends.dto.LoginRequest;
import com.teamtaskmanager.backends.dto.SignupRequest;
import com.teamtaskmanager.backends.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private AuthService authService;

    // Signup API
    @PostMapping("/signup")
    public AuthResponse signup(@RequestBody SignupRequest request) {
        String message = authService.signup(request);
        return new AuthResponse(message);
    }

    // Login API
    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        String message = authService.login(request);
        return new AuthResponse(message);
    }
}