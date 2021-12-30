import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
	htmlElement: ElementRef<HTMLElement>;
	private _color = 'red';
	private _texto = 'Este campo es requerido';

	@Input() set color(valor: string) {
		this._color = valor;
		this.setColor();
	}
	@Input() set mensaje(mensaje: string) {
		this._texto = mensaje;
		this.setMensaje();
	}

	constructor(private el: ElementRef<HTMLElement>) {
		this.htmlElement = el;
	}
	ngOnChanges(changes: SimpleChanges): void {}
	ngOnInit(): void {
		this.setColor();
		this.setMensaje();
	}

	setMensaje() {
		this.htmlElement.nativeElement.innerHTML = this._texto;
	}
	setColor() {
		this.htmlElement.nativeElement.style.color = this._color;
	}
}
