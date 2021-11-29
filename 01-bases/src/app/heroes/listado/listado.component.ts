import { Component } from '@angular/core';

@Component({
    selector: 'app-listado',
    templateUrl: './listado.component.html',
})
export class ListadoComponent {
    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan america'];
    deletedHeroe: string = '';
    borrarHeroe() {
        let heroe = this.heroes.shift() || '';
        this.deletedHeroe = heroe;
    }
}
