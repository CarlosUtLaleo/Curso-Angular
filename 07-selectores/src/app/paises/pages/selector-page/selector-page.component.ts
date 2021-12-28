import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesServiceService } from '../../services/paises-service.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
	selector: 'app-selector-page',
	templateUrl: './selector-page.component.html',
	styles: [],
})
export class SelectorPageComponent implements OnInit {
	miFormulario: FormGroup = this.fb.group({
		region: ['', Validators.required],
		pais: ['', Validators.required],
		frontera: ['', Validators.required],
	});

	regiones: string[] = [];
	paises: PaisSmall[] = [];
	fronteras: string[] = [];

	constructor(private fb: FormBuilder, private paisesService: PaisesServiceService) {}

	ngOnInit(): void {
		this.regiones = this.paisesService.regiones;
		this.miFormulario
			.get('region')
			?.valueChanges.pipe(
				tap((_) => {
					this.miFormulario.get('pais')?.reset('');
				}),
				switchMap((region) => this.paisesService.getPaisesPorRegion(region))
			)
			.subscribe((region) => (this.paises = region));

		this.miFormulario
			.get('pais')
			?.valueChanges.pipe(
				tap(() => {
					this.fronteras = [];
					this.miFormulario.get('frontera')?.reset('');
				}),
				switchMap((codigo) => this.paisesService.getPaisPorCodigo(codigo))
			)
			.subscribe((pais) => {
				this.fronteras = pais?.borders || [];
				console.log(pais);
			});
	}
}
