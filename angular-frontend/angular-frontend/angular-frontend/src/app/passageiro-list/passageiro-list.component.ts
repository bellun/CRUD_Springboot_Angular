import { Passageiro } from './../passageiro';
import { Component, OnInit } from '@angular/core';
import { PassageiroService } from '../passageiro.service';


@Component({
  selector: 'app-passageiro-list',
  templateUrl: './passageiro-list.component.html',
  styleUrls: ['./passageiro-list.component.css']
})
export class PassageiroListComponent implements OnInit {
  passageiros: Passageiro[] = [];

//teste
  constructor(private passageiroService: PassageiroService) { }

  ngOnInit(): void {
    this.getPassageiros();
  }

  private getPassageiros(){
    this.passageiroService.getPassageirosList().subscribe(data => {
      this.passageiros = data;
    });
  }
}
