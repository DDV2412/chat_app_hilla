package com.example.application.controllers;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.application.dto.ResponseData;
import com.example.application.dto.UserData;
import com.example.application.entities.User;
import com.example.application.security.AuthenticationUser;
import com.example.application.services.UserService;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.Endpoint;

@Endpoint
@AnonymousAllowed
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationUser authenticationUser;

    @Autowired
    private ModelMapper modelMapper;

    public Optional<Object> getAuthenticationUser() {
        return authenticationUser.get();
    }

    public ResponseEntity<ResponseData<User>> register(@RequestBody UserData userData) {
        ResponseData<User> responseData = new ResponseData<>();

        User user = modelMapper.map(userData, User.class);
        responseData.setPayload(userService.registerUser(user));
        responseData.setStatus(true);
        responseData.getMessages().add("Successfully saved user!");

        return ResponseEntity.ok(responseData);
    }

}
