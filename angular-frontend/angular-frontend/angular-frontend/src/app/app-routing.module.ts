import { CreatePassageiroComponent } from './create-passageiro/create-passageiro.component';
import { PassageiroListComponent } from './passageiro-list/passageiro-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePassageiroComponent } from './update-passageiro/update-passageiro.component';

const routes: Routes = [
  {path: 'passageiros', component: PassageiroListComponent},
  {path: 'create-passageiro', component: CreatePassageiroComponent},
  {path : '', redirectTo: 'passageiros', pathMatch: 'full'},
  {path: 'update-passageiro/:id', component: UpdatePassageiroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
