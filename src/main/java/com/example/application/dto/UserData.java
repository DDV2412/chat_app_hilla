package com.example.application.dto;

import java.util.UUID;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.example.application.utils.StrongPassword;

public class UserData {

    private UUID id;

    @NotEmpty(message = "Username cannot be an empty field")
    @NotNull(message = "Username is a required field")
    private String userName;

    @NotEmpty(message = "Firstname cannot be an empty field")
    @NotNull(message = "Firstname is a required field")
    private String firstName;

    @NotEmpty(message = "Lastname cannot be an empty field")
    @NotNull(message = "Lastname is a required field")
    private String lastName;

    @NotEmpty(message = "Email cannot be an empty field")
    @NotNull(message = "Email is a required field")
    @Email(message = "Please enter a valid e-mail address")
    private String email;

    @NotEmpty(message = "Password cannot be an empty field")
    @NotNull(message = "Password is a required field")
    @StrongPassword
    private String password;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
