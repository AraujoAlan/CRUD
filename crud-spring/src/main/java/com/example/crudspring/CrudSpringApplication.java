package com.example.crudspring;

import com.example.crudspring.model.Pessoas;
import com.example.crudspring.repository.PessoasRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	// @Bean
	// CommandLineRunner initDatabase(PessoasRepository pessoasRepository) {
	// 	return args -> {
	// 		pessoasRepository.deleteAll();

	// 		Pessoas p = new Pessoas();
	// 		p.setName("Alan Araujo");
	// 		p.setCpf("12345678912");
	// 		p.setSexo("M");
	// 		p.setEndereco("Rua X Numero 1");

	// 		pessoasRepository.save(p);
	// 	};
	// }
}
