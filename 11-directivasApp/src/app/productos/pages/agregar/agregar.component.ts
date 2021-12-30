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

	tieneError(campo: string) {
		return this.miFormulario.get(campo)?.invalid || false;
	}
}
