import { Passageiro } from './../passageiro';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-passageiro-list',
  templateUrl: './passageiro-list.component.html',
  styleUrls: ['./passageiro-list.component.css']
})
export class PassageiroListComponent implements OnInit {
  passageiros: Passageiro[] = [];
//teste
  constructor() { }

  ngOnInit(): void {
    this.passageiros = [{
      "id":1,
      "nome":"Fernando",
      "sobreNome": "Henrique",
      "email": "fhanteros@gmai.com"
    },
  {
     "id": 2,
    "nome":"Clarissa",
    "sobreNome": "Esteves",
    "email": "claraesteves@gmail.com"
  }];
  }

}
