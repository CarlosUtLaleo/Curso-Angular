import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-marcadores',
	templateUrl: './marcadores.component.html',
	styleUrls: ['./marcadores.component.css'],
})
export class MarcadoresComponent implements AfterViewInit {
	mapa!: mapboxgl.Map;
	@ViewChild('mapa') divMapa!: ElementRef;

	zoomLevel: number = 10;
	center: [number, number] = [-93.10127876276135, 16.77712879407655];

	constructor() {}
	ngAfterViewInit(): void {
		this.mapa = new mapboxgl.Map({
			container: this.divMapa.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: this.center,
			zoom: 17,
		});

		const marker = new mapboxgl.Marker().setLngLat(this.center).addTo(this.mapa);
	}
}
