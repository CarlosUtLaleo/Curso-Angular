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
	nuevoJuego: string = '';
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

	agregarJuego() {
		const juego: Favorito = {
			id: this.persona.favoritos.length + 1,
			nombre: this.nuevoJuego,
		};
		this.persona.favoritos.push(juego);
		this.nuevoJuego = '';
	}
	guardar() {}

	eliminar(index: number) {
		this.persona.favoritos.splice(index, 1);
	}
}
