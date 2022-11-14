package com.example.application.services;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.application.entities.User;
import com.example.application.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public Optional<User> get(UUID id) {
        return userRepo.findById(id);
    }

    public User update(User entity) {
        return userRepo.save(entity);
    }

    public void delete(UUID id) {
        userRepo.deleteById(id);
    }

    public Page<User> list(Pageable pageable) {
        return userRepo.findAll(pageable);
    }

    public User registerUser(User user) {
        return null;
    }
}
