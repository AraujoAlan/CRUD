import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

import { PessoasComponent } from './pessoas/pessoas.component';

const routes: Routes = [
  {
    path: '', component: PessoasComponent
  },
  {
    path: 'new', component: PessoaFormComponent
  },
  {
    path: 'edit', component: PessoaEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
