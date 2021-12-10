import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {


  termino: string = ""

  heroes: Heroe[]=[]
  constructor(private heroesService: HeroesService) { }

  heroeSeleccionado! : Heroe 

  ngOnInit(): void {
  }

  buscando() {
    console.log("buscando ",this.termino)
      this.heroesService.getHeroeByName(this.termino).subscribe(resp=>this.heroes = resp) 
  }
  
  opcionSeleccionada(e:MatAutocompleteSelectedEvent) {
    const heroe: Heroe = e.option.value; 
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById(heroe.id!).subscribe(resp=> this.heroeSeleccionado = resp)
  }
}
