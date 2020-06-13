package com.example.gaming.Repository;

import com.example.gaming.Model.Review;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface ReviewRepository extends MongoRepository<Review,String> {
}
