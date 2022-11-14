package com.example.application.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class UserData {

    @NotBlank(message = "UserName must not be blank")
    @Size(max = 50, message = "UserName must not exceed 50 characters")
    private String userName;

    @NotBlank(message = "FirstName must not be blank")
    @Size(max = 50, message = "Firstname must not exceed 50 characters")
    private String firstName;

    @NotBlank(message = "LastName must not be blank")
    @Size(max = 50, message = "LastName must not exceed 50 characters")
    private String lastName;

    @NotBlank(message = "Email must not be blank")
    @Size(max = 50, message = "Email must not exceed 50 characters")
    @Email(message = "Please insert valid email address")
    private String email;

    @NotBlank(message = "Password must not be blank")
    private String password;

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
