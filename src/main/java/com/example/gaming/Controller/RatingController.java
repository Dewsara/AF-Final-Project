package com.example.gaming.Controller;

import com.example.gaming.Model.Rating;
import com.example.gaming.Service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RatingController {
    @Autowired
    private RatingService ratingService;

    @RequestMapping(value = "/rating",method = RequestMethod.POST)
    public Rating addNewRating(@RequestBody Rating rating){
        return ratingService.insertNewRatingService(rating);
    }

    @RequestMapping(value = "/rating" , method = RequestMethod.GET)
    public Iterable<Rating> displayRatingList ()
    {
        return ratingService.listRatings();
    }

    //Find By ID method
    @RequestMapping(value = "/rating/{id}" , method = RequestMethod.GET)
    public Optional<Rating> findOneRating(@PathVariable String id){
        return ratingService.findRatingDetails(id);
    }

}
