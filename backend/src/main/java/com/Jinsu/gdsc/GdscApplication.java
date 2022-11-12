package com.Jinsu.gdsc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class GdscApplication {

	public static void main(String[] args) {
		SpringApplication.run(GdscApplication.class, args);
	}

}
