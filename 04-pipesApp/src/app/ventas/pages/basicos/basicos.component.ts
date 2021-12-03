import { Component } from '@angular/core';

@Component({
	selector: 'app-basicos',
	templateUrl: './basicos.component.html',
	styles: [],
})
export class BasicosComponent {
	nombreLower: string = 'carlos';
	nombreUpper: string = 'CARLOS';
	nombreCompleto: string = 'carLos abRaham';

	fecha: Date = new Date(); //Dia de hoy
}
