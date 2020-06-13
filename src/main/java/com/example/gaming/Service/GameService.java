package com.example.gaming.Service;

import com.example.gaming.Model.Game;
import com.example.gaming.Repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class GameService {

    @Autowired
    private GameRepository gameRepository;

    public Game insertNewGame(Game game) {
        return gameRepository.save(game);
    }

    public Iterable<Game> listGame(){
        return (Iterable<Game>) gameRepository.findAll();
    }

    public Optional<Game> findGameDetails(String id){
        return(Optional<Game>) gameRepository.findById(id);
    }
}
