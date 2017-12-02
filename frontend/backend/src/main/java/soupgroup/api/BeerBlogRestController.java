package soupgroup.api;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import soupgroup.domain.BeerEntity;
import soupgroup.service.BeerBlogService;

import java.util.List;

@RestController
public class BeerBlogRestController {


    @Autowired
    BeerBlogService beerBlogService;

    @GetMapping(value = "/api/v1/beer/")
    public List<BeerEntity> getBeerList(){
        return beerBlogService.getList();
    }

    @GetMapping(value = "/api/v1/beer/{id}")
    public BeerEntity getBeerEntity(@PathVariable("id") Long id){
        return beerBlogService.getBeerEntity(id);
    }

    @DeleteMapping(value = "/api/v1/beer/{id}")
    public void deleteBeerEntity(@PathVariable("id") Long id){
        beerBlogService.delete(id);
    }

    @PostMapping("/api/v1/beer")
    @ResponseStatus(value= HttpStatus.OK)
    public BeerEntity newBeerEntity(@RequestBody BeerEntity newBeerEntity){
        beerBlogService.save(newBeerEntity);
        return newBeerEntity;
    }

    @PutMapping("/api/v1/beer/{id}")
    public void updateBeerEntity(@PathVariable("id") Long id, @RequestBody BeerEntity newBeerEntity){

        if (newBeerEntity == null){
            throw new IllegalArgumentException("Keine Daten vorhanden!");
        }
        BeerEntity beerEntity = beerBlogService.findOne(id);

        if (beerEntity == null){
            throw new IndexOutOfBoundsException("Der Eintrag ist nicht vorhanden");
        }

        beerEntity.setName(newBeerEntity.getName());
        beerBlogService.save(beerEntity);

    }
}
