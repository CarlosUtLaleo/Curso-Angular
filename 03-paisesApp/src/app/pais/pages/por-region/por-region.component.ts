import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [],
})
export class PorRegionComponent {
    termino: string = '';
    hayError: boolean = false;

    paises: Country[] = [];

    constructor(private paisService: PaisService) {}

    buscar(termino: string) {
        this.termino = termino;
        this.hayError = false;

        this.paisService.buscarRegion(this.termino).subscribe(
            (paises) => {
                console.log(paises);
                this.paises = paises;
            },
            (error) => {
                console.log('Error');
                console.info(error);
                this.hayError = true;
                this.paises = [];
            }
        );
    }

    sugerencias(termino: string) {
        console.log(termino);
    }
}
