import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PessoasService } from '../services/pessoas.service';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

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

  Atualizar(){
    this.service.save(this.form.value)
      .subscribe(data => console.log(data));
  }

  onCancel(){
  }

}
