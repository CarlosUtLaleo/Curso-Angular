import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-no-comunes',
	templateUrl: './no-comunes.component.html',
	styles: [],
})
export class NoComunesComponent {
	//i18nSelect
	nombre: string = 'Fernando';
	genero: string = 'masculino';

	invitacionMap = {
		masculino: 'invirarlo',
		femenino: 'invitarla',
	};
	cambiarNombre() {
		this.nombre = 'Valeria';
		this.genero = 'femenino';
	}

	//i18nPlural
	clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Joaquin', 'Gonzalo'];
	clientesMapa = {
		'=0': 'no tenemos ningun cliente esperando',
		'=1': 'tenemos 1 cliente esperando',
		'=2': 'tenemos 2 clientes esperando',
		other: 'tenemos # clientes esperando',
	};

	borrarCliente() {
		this.clientes.pop();
	}

	//keyvalue pipe
	persona = {
		nombre: 'Fernando',
		edad: 35,
		direccion: 'Ottawa, Canada',
	};
}
