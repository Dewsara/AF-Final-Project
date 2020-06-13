package com.example.gaming.Repository;

        import com.example.gaming.Model.News;
        import org.springframework.data.mongodb.repository.MongoRepository;
public interface NewsRepository extends MongoRepository<News,String> {
}
