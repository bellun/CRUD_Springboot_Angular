import { Component, OnInit } from '@angular/core';
import { Passageiro } from '../passageiro';
import { PassageiroService } from '../passageiro.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-passageiro',
  templateUrl: './update-passageiro.component.html',
  styleUrls: ['./update-passageiro.component.css']
})
export class UpdatePassageiroComponent implements OnInit {
  id!: number;
  passageiro: Passageiro = new Passageiro();
  constructor(private passageiroService: PassageiroService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.passageiroService.getPassageiroById(this.id).subscribe((data: Passageiro) => {
      this.passageiro = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.passageiroService.updatePassageiro(this.id, this.passageiro).subscribe( (data: any) =>{
      this.goToPassageiroList();
    }
    ,(error: any)=> console.log(error));
  }

  goToPassageiroList(){
    this.router.navigate(['/passageiros']);
  }
}
