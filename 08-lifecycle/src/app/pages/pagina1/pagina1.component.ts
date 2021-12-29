import { interval, Subscription } from 'rxjs';
import {
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	Component,
	DoCheck,
	OnChanges,
	OnDestroy,
	OnInit,
	SimpleChanges,
} from '@angular/core';

@Component({
	selector: 'app-pagina1',
	templateUrl: './pagina1.component.html',
	styles: [],
})
export class Pagina1Component
	implements
		OnInit,
		OnChanges,
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy
{
	nombre: string = 'Carlos';
	segundos: number = 0;

	timerSuscription!: Subscription;

	constructor() {
		console.log('constructor');
	}
	ngDoCheck(): void {
		console.log('ngDoCheck');
	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit.');
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}
	ngOnDestroy(): void {
		console.log('ngOnDestroy.');
		this.timerSuscription.unsubscribe();
	}

	ngOnInit(): void {
		console.log('ngOnInit');
		this.timerSuscription = interval(1000).subscribe((i) => (this.segundos = i));
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges');
	}
	guardar() {
		this.nombre = 'fernando';
	}
}
