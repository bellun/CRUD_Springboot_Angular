package net.java.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.java.springboot.exception.ResourceNotFoundException;
import net.java.springboot.model.Passageiro;
import net.java.springboot.repository.PassageiroRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PassageiroController {
	
	@Autowired
	private PassageiroRepository passageiroRepository;
//COMENTARIO TESTANDO GIT
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
	
	
	//filtrar
	@GetMapping("/passageiros/{id}")
	public ResponseEntity<Passageiro>  getPassageiroById(@PathVariable Long id) {
		Passageiro passageiro = passageiroRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Passageiro não existe com o id:"+ id));	
		return ResponseEntity.ok(passageiro);
		
	}
	
	//update 
	@PutMapping("/passageiros/{id}")
	public ResponseEntity<Passageiro> updatePassageiro(@PathVariable Long id, @RequestBody Passageiro passageiroDetails){
		Passageiro passageiro = passageiroRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Passageiro não existe com o id:"+ id));
		passageiro.setNome(passageiroDetails.getNome());
		passageiro.setSobreNome(passageiroDetails.getSobreNome());
		passageiro.setEmail(passageiro.getEmail());
		 
		Passageiro passageiroAtualizado = passageiroRepository.save(passageiro);
		return ResponseEntity.ok(passageiroAtualizado);
	}
	
	//deletar
	@DeleteMapping("/passageiros/{id}")
	public ResponseEntity< Map<String, Boolean>> deletePassageiro(@PathVariable Long id ) {
		Passageiro passageiro = passageiroRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Passageiro não existe com o id:"+ id));
		passageiroRepository.delete(passageiro);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
}
