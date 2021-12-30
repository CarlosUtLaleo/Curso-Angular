import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
	htmlElement: ElementRef<HTMLElement>;
	@Input() color: string = 'red';
	constructor(private el: ElementRef<HTMLElement>) {
		this.htmlElement = el;
	}
	ngOnInit(): void {
		this.setColor();
	}

	setColor() {
		this.htmlElement.nativeElement.style.color = this.color;
	}
}
