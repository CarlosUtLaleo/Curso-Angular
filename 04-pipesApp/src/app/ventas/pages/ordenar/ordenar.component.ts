import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ordenar',
	templateUrl: './ordenar.component.html',
	styles: [],
})
export class OrdenarComponent implements OnInit {
	mayusculas: boolean = true;

	cars = [];
	constructor() {}

	ngOnInit(): void {}

	toggleMayusculas() {
		this.mayusculas = !this.mayusculas;
	}
}
