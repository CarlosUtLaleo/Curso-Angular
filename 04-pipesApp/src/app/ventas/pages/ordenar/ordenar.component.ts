import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
	selector: 'app-ordenar',
	templateUrl: './ordenar.component.html',
	styles: [],
})
export class OrdenarComponent {
	mayusculas: boolean = true;
	ordenarPor: string = '';

	heroes: Heroe[] = [
		{ nombre: 'Superman', vuela: true, color: Color.azul },
		{ nombre: 'Batman', vuela: false, color: Color.negro },
		{ nombre: 'Robin', vuela: false, color: Color.verde },
		{ nombre: 'Darevil', vuela: false, color: Color.negro },
		{ nombre: 'Linterna verde', vuela: true, color: Color.verde },
	];

	toggleMayusculas() {
		this.mayusculas = !this.mayusculas;
	}

	cambiarOrden(valor: string) {
		this.ordenarPor = valor;
	}
}
