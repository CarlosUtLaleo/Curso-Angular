import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
	transform(texto: string): string {
		return 'HOLA MUNDO!';
	}
}
