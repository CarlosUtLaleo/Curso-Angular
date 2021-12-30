import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[error-msg]',
})
export class ErrorMsgDirective {
	htmlElement: ElementRef<HTMLElement>;

	@Input() set color(valor: string) {
		this.htmlElement.nativeElement.style.color = valor;
	}
	@Input() set mensaje(mensaje: string) {
		this.htmlElement.nativeElement.innerHTML = mensaje;
	}

	constructor(private el: ElementRef<HTMLElement>) {
		this.htmlElement = el;
	}
}
