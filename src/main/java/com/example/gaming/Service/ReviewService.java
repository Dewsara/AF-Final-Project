package com.example.gaming.Service;

import com.example.gaming.Model.Review;
import com.example.gaming.Repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;
    public Review insertNewReviewService(Review review) {
        return reviewRepository.save(review);
    }

    public Iterable<Review> listReviews(){
        return (Iterable<Review>) reviewRepository.findAll();
    }

    public Optional<Review> findReviewDetails(String id){
        return(Optional<Review>) reviewRepository.findById(id);
    }

}
