import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
	selector: 'app-agregar',
	templateUrl: './agregar.component.html',
	styles: [
		`
			img {
				width: 100%;
			}
		`,
	],
})
export class AgregarComponent implements OnInit {
	heroe: Heroe = {
		superhero: '',
		alter_ego: '',
		characters: '',
		first_appearance: '',
		publisher: Publisher.DCComics,
		alt_img: '',
	};
	publishers = [
		{
			id: 'DC Comics',
			desc: 'DC - Comics',
		},
		{
			id: 'Marvel Comics',
			desc: 'Marvel - Comics',
		},
	];

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private heroesService: HeroesService,
		private snackBar: MatSnackBar,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		if (!this.router.url.includes('editar')) {
			return;
		}

		this.activatedRoute.params.subscribe(({ id }) => {
			this.heroesService.getHeroeById(id).subscribe((resp) => {
				this.heroe = resp;
			});
		});
	}

	guardar() {
		if (this.heroe.superhero.trim().length === 0) {
			return;
		}

		if (this.heroe.id) {
			this.heroesService
				.actualizarHeroe(this.heroe)
				.subscribe((resp) => this.mostrarSnackBar('Registro actualizado'));
		} else {
			this.heroesService.agregarHeroe(this.heroe).subscribe((resp) => {
				this.router.navigate(['/heroes', resp.id]);
				this.mostrarSnackBar('Registro creado');
			});
		}
	}

	borrar() {
		this.dialog.open(ConfirmarComponent, {
			width: '250px',
		});
		/* 		this.heroesService.borrarHeroe(this.heroe.id!).subscribe((resp) => {
			this.router.navigate(['/heroes']);
			this.mostrarSnackBar('Registro borrado');
		}); */
	}

	mostrarSnackBar(mensaje: string) {
		this.snackBar.open(mensaje, '!ok', {
			duration: 2500,
		});
	}
}
