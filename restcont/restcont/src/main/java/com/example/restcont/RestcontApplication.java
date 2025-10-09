package com.example.restcont;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RestcontApplication {

	@GetMapping("/")
	public String Sayhello(){
		return "hello the king Hrushikesh, How are you?";
	}

	public static void main(String[] args) {
		SpringApplication.run(RestcontApplication.class, args);
	}

}
