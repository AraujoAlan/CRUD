import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Pessoa } from './../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private readonly API = 'api/pessoas';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Pessoa[]>(this.API)
    .pipe(
      first(),
      //delay(1000),
      tap(pessoas => console.log(pessoas))
    );
  }

  save(record: Pessoa) {
    return this.httpClient.post<Pessoa>(this.API, record);
  }

  getPessoasId(id: number){
    return this.httpClient.get<Pessoa>(this.API+id);
  }

  edit(pessoa: Pessoa) {
    return this.httpClient.put<Pessoa>(this.API, pessoa.id);
  }
}
