import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
	//TODO: Temporal

	nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
	emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

	noPuedeSerStrider(control: FormControl) {
		const valor = control.value?.trim().toLowerCase();
		if (valor == 'strider') {
			return {
				noStrider: true,
			};
		}
		return null;
		console.log(valor);
	}

	miFormulario: FormGroup = this.fb.group({
		nombre: ['', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
		email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
		username: ['', [Validators.required, this.noPuedeSerStrider]],
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.miFormulario.reset({
			nombre: 'Carlos Utrilla',
			email: 'carlos@emial.com',
		});
	}

	campoNoValido(campo: string) {
		return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
	}

	submitFormulario() {
		console.log(this.miFormulario.value);

		this.miFormulario.markAllAsTouched();
	}
}