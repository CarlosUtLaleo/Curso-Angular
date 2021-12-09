import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {


  heroe!: Heroe 
  constructor(private route: ActivatedRoute, private heroeService: HeroesService) {
    
   }

  ngOnInit(): void {
    this.route.params.subscribe(({id})=> {
      console.log(id  );
      this.heroeService.getHeroeById(id).subscribe(resp=> this.heroe = resp)
    })
  }

}
