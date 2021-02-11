import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassageiroListComponent } from './passageiro-list/passageiro-list.component';
import { CreatePassageiroComponent } from './create-passageiro/create-passageiro.component';
import { UpdatePassageiroComponent } from './update-passageiro/update-passageiro.component';
import { PassageiroDetailsComponent } from './passageiro-details/passageiro-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PassageiroListComponent,
    CreatePassageiroComponent,
    UpdatePassageiroComponent,
    PassageiroDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
