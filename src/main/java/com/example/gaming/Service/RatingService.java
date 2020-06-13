package com.example.gaming.Service;

import com.example.gaming.Model.Rating;
import com.example.gaming.Repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    public Rating insertNewRatingService(Rating rating) {
        return ratingRepository.save(rating);
    }

    public Iterable<Rating> listRatings(){
        return (Iterable<Rating>) ratingRepository.findAll();
    }

    public Optional<Rating> findRatingDetails(String id){
        return(Optional<Rating>) ratingRepository.findById(id);
    }
}
