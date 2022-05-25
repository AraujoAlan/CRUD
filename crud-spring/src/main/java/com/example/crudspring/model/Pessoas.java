package com.example.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Pessoas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(length = 200, nullable = false)
    private String name;

    @Column(length = 11, nullable = false)
    private String cpf;

    @Column(length = 1, nullable = false)
    private String sexo;
    
    @Column(length = 200, nullable = false)
    private String endereco;
}
