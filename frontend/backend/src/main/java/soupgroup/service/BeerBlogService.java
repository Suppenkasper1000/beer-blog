package soupgroup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import soupgroup.domain.BeerEntity;
import soupgroup.domain.BeerRepository;

import java.util.List;


/**
 * Created by D1AOK27 on 27.06.2017.
 */
@Service
public class BeerBlogService {

    @Autowired
    BeerRepository beerRepository;


    public List<BeerEntity> getList() {
        if(beerRepository.count() < 1){}
        return beerRepository.findAll();
    }

    public BeerEntity getBeerEntity(Long id){
        BeerEntity beerEntity = beerRepository.findOne(id);
        return beerEntity;
    }

    public void delete(Long id) {
        beerRepository.delete(id);
    }

    public void save(BeerEntity beerEntity){
        beerRepository.save(beerEntity);
    }

    public BeerEntity findOne(Long id) {
        return beerRepository.findOne(id);
    }
}
