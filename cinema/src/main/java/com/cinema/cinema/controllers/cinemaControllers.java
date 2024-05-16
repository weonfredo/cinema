package com.cinema.cinema.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class cinemaControllers {

    @RequestMapping(value = "/")
    public String index() {
        return "index"; // Este se resolverá como src/main/resources/templates/index.html si usas
                        // Thymeleaf
    }
}