import { UpdatePassageiroComponent } from './../update-passageiro/update-passageiro.component';
import { Passageiro } from './../passageiro';
import { Component, OnInit } from '@angular/core';
import { PassageiroService } from '../passageiro.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passageiro-list',
  templateUrl: './passageiro-list.component.html',
  styleUrls: ['./passageiro-list.component.css']
})
export class PassageiroListComponent implements OnInit {
  passageiros: Passageiro[] = [];

//teste
  constructor(private passageiroService: PassageiroService, private router: Router) { }

  ngOnInit(): void {
    this.getPassageiros();
  }

  private getPassageiros(){
    this.passageiroService.getPassageirosList().subscribe(data => {
      this.passageiros = data;
    });
  }

  updatePassageiro(id: number){
    this.router.navigate(['update-passageiro', id]);
  }
}
