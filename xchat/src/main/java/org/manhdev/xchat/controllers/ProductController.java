package org.manhdev.xchat.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @GetMapping("")
    List<String> getProducts() {
        return List.of("Product 1", "Product 2", "Product 3");
    }
}
