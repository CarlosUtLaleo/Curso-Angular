import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
	//TODO: Temporal

	miFormulario: FormGroup = this.fb.group(
		{
			nombre: [
				'',
				[Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)],
			],
			email: [
				'',
				[Validators.required, Validators.pattern(this.vs.emailPattern)],
				[this.emailValidator],
			],
			username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
			password: ['', [Validators.required, Validators.minLength(6)]],
			password2: ['', [Validators.required]],
		},
		{
			validators: [this.vs.camposIguales('password', 'password2')],
		}
	);

	constructor(
		private fb: FormBuilder,
		private vs: ValidatorService,
		private emailValidator: EmailValidatorService
	) {}

	get emailErrorMsg(): string {
		const errors = this.miFormulario.get('email');
		if (errors?.getError('required')) {
			return 'Email es obligatorio';
		} else if (errors?.getError('pattern')) {
			return 'El valor ingresado no tiene formato de correo';
		} else if (errors?.getError('emailTomado')) {
			return 'El email ya fue tomado';
		}

		return '';
	}
	ngOnInit(): void {
		this.miFormulario.reset({
			nombre: 'Carlos Utrilla',
			email: 'carlos@emial.com',
			username: 'fernando_her85',
			password: '123456',
			password2: '123456',
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
