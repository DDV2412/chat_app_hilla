package com.example.application.controllers;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.application.entities.User;
import com.example.application.services.UserService;

import dev.hilla.Endpoint;

@Endpoint
public class UserController {

    @Autowired
    private UserService userService;

    public User userByUsername(String userName) {
        return userService.userByUsername(userName);
    }
}
