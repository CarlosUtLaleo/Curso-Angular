import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
    personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000,
        },
        {
            nombre: 'Vegueta',
            poder: 7500,
        },
    ];

    nuevo: Personaje = {
        nombre: 'Maestro roshi',
        poder: 1000,
    };

    agregarNuevo(arg: Personaje) {
        this.personajes.push(arg);
    }
}
