import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroreComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado() {
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad} `;
    }
}
