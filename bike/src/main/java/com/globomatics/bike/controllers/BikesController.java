package com.globomatics.bike.controllers;

import com.globomatics.bike.models.Bike;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/bikes")
public class BikesController {

    private Map<Long, Bike> bikes = new HashMap<>();

    @PostConstruct
    void init() {
        bikes.put(1L, new Bike(1L, "Bike 1", "bike1@qwe", "999-999-999", "model 1", "123456",
                "200", "12-12-2018", false));
        bikes.put(2L, new Bike(2L, "Bike 1", "bike1@qwe", "999-999-999", "model 1", "123456",
                "200", "12-12-2018", false));
        bikes.put(3L, new Bike(3L, "Bike 1", "bike1@qwe", "999-999-999", "model 1", "123456",
                "200", "12-12-2018", false));
    }

    @GetMapping
    public Collection<Bike> list() {
        return bikes.values();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void create(@RequestBody Bike bike) {
        bikes.put(bike.getId(), bike);
    }

    @GetMapping("/{id}")
    public Bike get(@PathVariable("id") long id) {
        return bikes.get(id);
    }

}
