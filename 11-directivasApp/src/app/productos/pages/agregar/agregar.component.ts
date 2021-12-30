import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-agregar',
	templateUrl: './agregar.component.html',
	styles: [],
})
export class AgregarComponent {
	miFormulario: FormGroup = this.fb.group({
		nombre: ['', Validators.required],
	});
	constructor(private fb: FormBuilder) {}

	texto1: string = 'Debe ingresar este campo';
	color: string = ' red';
	cambiarTexto() {
		this.texto1 = 'Juan Carlos';
	}
	cambiarColor() {
		const color = '#xxxxxx'.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
		this.color = color;
	}
	tieneError(campo: string) {
		return this.miFormulario.get(campo)?.invalid || false;
	}
}
