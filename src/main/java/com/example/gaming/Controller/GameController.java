package com.example.gaming.Controller;

import com.example.gaming.Model.Game;
import com.example.gaming.Service.GameService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class GameController {

    @Autowired
    private GameService gameService;

    @RequestMapping(value = "/game" , method = RequestMethod.POST)
    public Game addNewGame(@RequestBody Game game){
        return gameService.insertNewGame(game);
    }

    @RequestMapping(value = "/game" , method = RequestMethod.GET)
    public Iterable<Game> displayGameList ()
    {
        return gameService.listGame();
    }

    //Find By ID method
    @RequestMapping(value = "/game/{id}" , method = RequestMethod.GET)
    public Optional<Game> findOneGame(@PathVariable String id){
        return gameService.findGameDetails(id);
    }

}
