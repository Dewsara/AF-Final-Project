package com.example.gaming.Repository;

import com.example.gaming.Model.Game;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface GameRepository extends MongoRepository<Game,String>{

}
