import { Component, OnInit } from '@angular/core';

interface MenuItem {
	text: string;
	ruta: string;
}

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
	constructor() {}

	templateMenu: MenuItem[] = [
		{
			text: 'Basicos',
			ruta: './template/basicos',
		},
		{
			text: 'Dinamicos',
			ruta: './template/dinamicos',
		},
		{
			text: 'Switches',
			ruta: './template/switches',
		},
	];

	reactiveMenu: MenuItem[] = [
		{
			text: 'Basicos',
			ruta: './reactive/basicos',
		},
		{
			text: 'Dinamicos',
			ruta: './reactive/dinamicos',
		},
		{
			text: 'Switches',
			ruta: './reactive/switches',
		},
	];
	validatorsMenu: MenuItem[] = [
		{
			text: 'Login',
			ruta: './auth/login',
		},
		{
			text: 'Rehistro',
			ruta: './auth/registro',
		},
	];

	ngOnInit(): void {}
}
