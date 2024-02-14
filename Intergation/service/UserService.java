package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Users;
import com.example.boat.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo repository;

    public List<Users> getUsers(){
        return repository.findAll();
    }

    public void addUsers(Users user){
        repository.save(user);
    }

    public Users getUserById(String id){
        return repository.findById(id).get();
    }

    public void addUser(Users user) {
        repository.save(user);
    }

    public Users updateUser(String id, Users userDetails) {
        Users user = repository.findById(id).get();
                              

        // Update user details
        if(userDetails.getName()!=null)
        user.setName(userDetails.getName());

        if(userDetails.getEmail()!=null);
        user.setEmail(userDetails.getEmail());

    
        if(userDetails.getAddress()!=null);
        user.setAddress(userDetails.getAddress());
        
        if(userDetails.getImage()!=null);
        user.setImage(userDetails.getImage());


        return repository.save(user);
    }

    public void deleteUser(String id) {
        Users user = repository.findById(id).get();
                              
        repository.delete(user);
    }
}
