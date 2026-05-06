package com.teamtaskmanager.backends.dto;

public class AuthResponse {

    private String message;

    // Constructor
    public AuthResponse(String message) {
        this.message = message;
    }

    // Getter
    public String getMessage() {
        return message;
    }

    // Setter
    public void setMessage(String message) {
        this.message = message;
    }
}