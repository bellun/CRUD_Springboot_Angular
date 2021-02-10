import { PassageiroListComponent } from './passageiro-list/passageiro-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'passageiros', component: PassageiroListComponent},
  {path :'', redirectTo: 'passageiros', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
