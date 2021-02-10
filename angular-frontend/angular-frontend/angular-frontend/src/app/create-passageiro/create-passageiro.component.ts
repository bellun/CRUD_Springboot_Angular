import { Component, OnInit } from '@angular/core';
import { Passageiro } from '../passageiro';

@Component({
  selector: 'app-create-passageiro',
  templateUrl: './create-passageiro.component.html',
  styleUrls: ['./create-passageiro.component.css']
})
export class CreatePassageiroComponent implements OnInit {

  passageiro: Passageiro =  new Passageiro();
  constructor() { }

  ngOnInit(): void {


  }
  // tslint:disable-next-line: typedef
  onSubmit(){
    console.log(this.passageiro);

  }

}
