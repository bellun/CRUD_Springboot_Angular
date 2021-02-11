import { PassageiroService } from './../passageiro.service';
import { ActivatedRoute } from '@angular/router';
import { Passageiro } from './../passageiro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passageiro-details',
  templateUrl: './passageiro-details.component.html',
  styleUrls: ['./passageiro-details.component.css']
})
export class PassageiroDetailsComponent implements OnInit {
  id!: number;
  passageiro: Passageiro = new Passageiro;
  constructor(private route: ActivatedRoute, private passageiroService : PassageiroService ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.passageiro = new Passageiro();
    this.passageiroService.getPassageiroById(this.id).subscribe( (data: Passageiro) => {
      this.passageiro = data;
    });
  }

}
