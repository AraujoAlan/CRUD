import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Pessoa } from './../model/pessoa';
import { PessoasService } from './../services/pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  pessoas$: Observable<Pessoa[]>;

  displayedColumns = ['id', 'name', 'cpf', 'sexo', 'endereco', 'acoes'];

  constructor(
    private pessoasService: PessoasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
    this.pessoas$ = this.pessoasService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar Pessoas.')
        return of([])
      })
    );
  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo : this.route})
  }

  onEdit(pessoa : Pessoa): void {
    localStorage.setItem("id", pessoa.id.toString());
    this.router.navigate(['edit'], {relativeTo : this.route});  
  }

  onDelet() {
    console.log(onmessage, "delete")
  }

}
