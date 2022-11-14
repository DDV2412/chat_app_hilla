package com.example.application.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.application.entities.User;

public interface UserRepo extends JpaRepository<User, UUID> {

    User findByUserName(String userName);

    Optional<User> findByEmail(String email);
}
