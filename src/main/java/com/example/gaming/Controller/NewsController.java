package com.example.gaming.Controller;

import com.example.gaming.Model.News;
import com.example.gaming.Service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class NewsController {
    @Autowired
    private NewsService newsService;

    @RequestMapping(value = "/news",method = RequestMethod.POST)
    public News addNewNews(@RequestBody News news){
        return newsService.insertNewNewsService(news);
    }

    @RequestMapping(value = "/news" , method = RequestMethod.GET)
    public Iterable<News> displayNewsList ()
    {
        return newsService.listNews();
    }

    //Find By ID method
    @RequestMapping(value = "/news/{id}" , method = RequestMethod.GET)
    public Optional<News> findOneNews(@PathVariable String id){
        return newsService.findNewsDetails(id);
    }
}
