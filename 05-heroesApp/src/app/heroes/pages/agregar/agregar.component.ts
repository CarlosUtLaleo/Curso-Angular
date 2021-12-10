import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  heroe: Heroe ={
    superhero: "",
    alter_ego: "",
    characters: "",
    first_appearance: "",
    publisher: Publisher.DCComics,
    alt_img: ""
  }
  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ]

  constructor(private route: ActivatedRoute, private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      console.log(id)
    })
  
  }
  
  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    this.heroesService.agregarHeroe(this.heroe).subscribe(
      resp => {
        console.log("Respuesta: ", resp)
      }
    )
  }
}
