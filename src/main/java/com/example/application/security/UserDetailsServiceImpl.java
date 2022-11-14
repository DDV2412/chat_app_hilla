package com.example.application.security;

import java.util.Collection;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.application.entities.User;
import com.example.application.repository.UserRepo;

public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userRepo.findByUserName(userName);
        if (user == null) {
            throw new UsernameNotFoundException(
                    String.format("Username or Password does not match"));
        } else {
            return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
                    getAuthorities(user));
        }
    }

    private Collection<? extends GrantedAuthority> getAuthorities(User user) {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(user.getEmail());

        return Collections.singleton(authority);
    }

}
