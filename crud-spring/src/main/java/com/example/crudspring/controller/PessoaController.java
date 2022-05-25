package com.example.crudspring.controller;

import java.util.List;

import com.example.crudspring.model.Pessoas;
import com.example.crudspring.repository.PessoasRepository;

import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/pessoas")
@AllArgsConstructor
public class PessoaController {

    private final PessoasRepository pessoasRepository;
    

    @GetMapping
    public List<Pessoas> list() {
        return pessoasRepository.findAll();
    }

    @PostMapping("/api/pessoas")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Pessoas create(@RequestBody Pessoas pessoa) {
        return pessoasRepository.save(pessoa);
    }

    @PutMapping("{id}")
    public Pessoas edit(@PathVariable Long id, @RequestBody Pessoas pessoa) {
        Pessoas pessoasAtual = pessoasRepository.findById(id).get();
        BeanUtils.copyProperties(pessoa, pessoasAtual, "id");
        return pessoasRepository.save(pessoasAtual);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void delet(@PathVariable Long id) {
        pessoasRepository.deleteById(id);
    }
    
}
