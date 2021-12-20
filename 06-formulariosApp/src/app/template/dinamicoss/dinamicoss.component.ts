import { Component } from '@angular/core';

interface Persona {
	nombre: string;
	favoritos: Favorito[];
}

interface Favorito {
	id: number;
	nombre: string;
}
@Component({
	selector: 'app-dinamicoss',
	templateUrl: './dinamicoss.component.html',
	styles: [],
})
export class DinamicossComponent {
	persona: Persona = {
		nombre: 'Carlos',
		favoritos: [
			{
				id: 1,
				nombre: 'Metal Gear',
			},
			{
				id: 2,
				nombre: 'DeathStranding',
			},
		],
	};

	guardar() {}
}
