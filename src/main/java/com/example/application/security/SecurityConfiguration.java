package com.example.application.security;

import java.util.Base64;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jose.jws.JwsAlgorithms;

import com.vaadin.flow.spring.security.VaadinWebSecurity;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends VaadinWebSecurity {
    public static final String LOGOUT_URL = "/";

    @Value("${com.example.application.auth.secret}")
    private String authSecret;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        super.configure(http);

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        setLoginView(http, "/login", LOGOUT_URL);
        setStatelessAuthentication(http, new SecretKeySpec(Base64.getDecoder().decode(authSecret), JwsAlgorithms.HS256),
                "com.example.application");
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);
        web.ignoring().antMatchers("/images/*.png", "/icons/*.png").antMatchers("/email", "/verify-notice",
                "/forgot-password", "/setup-password", "/reset-password/*");
    }
}
