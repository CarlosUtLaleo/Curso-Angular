import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-tarjeta-component',
  templateUrl: './tarjeta-component.component.html',
  styleUrls: ['./tarjeta-component.component.css']
})
export class TarjetaComponentComponent {

  @Input() heroe!: Heroe
}
