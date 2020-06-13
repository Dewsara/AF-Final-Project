package com.example.gaming.Service;

import com.example.gaming.Model.News;
import com.example.gaming.Repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NewsService {
    @Autowired
    private NewsRepository newsRepository;

    public News insertNewNewsService(News news) {
        return newsRepository.save(news);
    }

    public Iterable<News> listNews(){
        return (Iterable<News>) newsRepository.findAll();
    }

    public Optional<News> findNewsDetails(String id){
        return(Optional<News>) newsRepository.findById(id);
    }
}
