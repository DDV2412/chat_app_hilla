package com.example.application.controllers;

import java.util.Optional;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.application.dto.MailData;
import com.example.application.dto.ResponseData;
import com.example.application.dto.UserData;
import com.example.application.entities.User;
import com.example.application.security.AuthenticationUser;
import com.example.application.services.MailService;
import com.example.application.services.UserService;
import com.example.application.utils.JsonWebToken;
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
    private MailService mailService;

    @Autowired
    private JsonWebToken jsonWebToken;

    @Autowired
    private ModelMapper modelMapper;

    public Optional<Object> getAuthenticationUser() {
        return authenticationUser.get();
    }

    public ResponseEntity<ResponseData<User>> register(@Valid @RequestBody UserData userData) {
        ResponseData<User> responseData = new ResponseData<>();

        User user = modelMapper.map(userData, User.class);
        responseData.setPayload(userService.registerUser(user));
        responseData.setStatus(true);
        responseData.getMessages().add("Successfully saved user!");

        return ResponseEntity.ok(responseData);
    }

    public ResponseEntity<ResponseData<Object>> verify(@RequestBody User userData) {
        ResponseData<Object> responseData = new ResponseData<>();

        String token = jsonWebToken.generateToken(userData);

        String subject = "Confirm your email address on UK Messages";

        String message = "Thank you for creating an account with UK Messages.\n To activate your account and set up your personal password, please click below. \n Note: Email verification link is valid for 24h. \n http://localhost:8080/setup-password?token="
                + token;

        MailData mailData = new MailData();

        mailData.setRecipient(userData.getEmail());
        mailData.setMessages(message);
        mailData.setSubject(subject);

        String status = mailService.SimpleSendMail(mailData);

        if (status != null) {
            responseData.setPayload(userData);
            responseData.setStatus(true);
            responseData.getMessages().add("Successfully sended email verify");

            return ResponseEntity.ok(responseData);
        }

        responseData.setPayload(null);
        responseData.setStatus(false);
        responseData.getMessages().add("Cannot sended email verify");

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseData);
    }

}
