import { PassageiroService } from './../passageiro.service';
import { Component, OnInit } from '@angular/core';
import { Passageiro } from '../passageiro';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-passageiro',
  templateUrl: './create-passageiro.component.html',
  styleUrls: ['./create-passageiro.component.css']
})
export class CreatePassageiroComponent implements OnInit {

  passageiro: Passageiro =  new Passageiro();

  constructor(private passageiroService: PassageiroService, private router: Router) {

   }

  ngOnInit(): void {
  }

  savePassageiro(){
    // tslint:disable-next-line: deprecation
    this.passageiroService.createPassageiro(this.passageiro).subscribe(data =>{
      console.log(data);
      this.goToPassageiroList();
    },
    error =>console.log(error));
  }


  goToPassageiroList() {
    this.router.navigate(['/passageiros']);
  }





  // tslint:disable-next-line: typedef
  onSubmit(){
    console.log(this.passageiro);
    this.savePassageiro();
  }

}
