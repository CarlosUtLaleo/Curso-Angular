import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
	transform(texto: string, enMayusculas: boolean = true): string {
		if (enMayusculas) {
			return texto.toUpperCase();
		} else return texto.toLowerCase();
	}
}
