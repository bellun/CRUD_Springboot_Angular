package net.java.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.java.springboot.model.Passageiro;
import net.java.springboot.repository.PassageiroRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PassageiroController {
	
	@Autowired
	private PassageiroRepository passageiroRepository;

	//listar todos passageiros
	@GetMapping("/passageiros")
	public List<Passageiro> getAllPassageiros(){
		return passageiroRepository.findAll();
	}
	
	//criar passageiro rest api
	@PostMapping("/passageiros")
	public Passageiro createPassageiro(@RequestBody Passageiro passageiro) {
		return passageiroRepository.save(passageiro);
	}
	
}
