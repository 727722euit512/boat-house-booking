package com.example.boat.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.boat.entity.Boat;
import com.example.boat.repository.BoatRepo;

@Service
public class BoatService {
    @Autowired
    BoatRepo repository;

    public void addBoats(Boat boat){
        repository.save(boat);
    }

    public List<Boat> getbBoats(){
        return repository.findAll();
    }

    public Boat getBoatByid(int id){
        return repository.findById(id).get();
    }
    public Boat updateBoat(Long id, Boat boatDetails) {
        Boat boat = repository.findById(id)
                                  .orElseThrow(() -> new ResourceNotFoundException("Boat not found with id: " + id));
        boat.setName(boatDetails.getName());
        boat.setType(boatDetails.getType());
        // Set other fields as needed
        return repository.save(boat);
    }

    public void deleteBoat(Long id) {
        Boat boat = repository.findById(id)
                                  .orElseThrow(() -> new ResourceNotFoundException("Boat not found with id: " + id));
        repository.delete(boat);
    }
}
