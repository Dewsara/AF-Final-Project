package com.example.gaming.Controller;

import com.example.gaming.Model.Review;
import com.example.gaming.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @RequestMapping(value = "/review",method = RequestMethod.POST)
    public Review addNewReview(@RequestBody Review review)
    {
        return reviewService.insertNewReviewService(review);
    }

    @RequestMapping(value = "/review" , method = RequestMethod.GET)
    public Iterable<Review> displayReviewList ()
    {
        return reviewService.listReviews();
    }

    //Find By ID method
    @RequestMapping(value = "/review/{id}" , method = RequestMethod.GET)
    public Optional<Review> findOneReview(@PathVariable String id){
        return reviewService.findReviewDetails(id);
    }
}
