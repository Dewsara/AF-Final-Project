package com.example.gaming.Repository;

import com.example.gaming.Model.Rating;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RatingRepository extends MongoRepository <Rating, String>{
}
