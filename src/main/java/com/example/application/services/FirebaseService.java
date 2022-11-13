package com.example.application.services;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;


@Service
public class FirebaseService {

    @PostConstruct
    public void initialize(){
        try {
            FileInputStream serviceAccount =
  new FileInputStream("firebasePrivateKey.json");
FirebaseOptions options = FirebaseOptions.builder()
  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
  .build();

if(FirebaseApp.getApps().isEmpty()){
    FirebaseApp.initializeApp(options);
}
        } catch (Exception e) {
           e.printStackTrace();
        }
    }
    }

