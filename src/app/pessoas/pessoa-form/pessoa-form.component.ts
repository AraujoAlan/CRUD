import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: PessoasService,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      cpf: [null],
      sexo: [null],
      endereco: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(data => console.log(data));
  }

  onCancel(){
    this.location.back();
  }

}
