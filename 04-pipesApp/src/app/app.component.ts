import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	nombre = 'CarLos aBraham';

	cambiarNombre() {
		console.log(this.nombre);
	}
}
