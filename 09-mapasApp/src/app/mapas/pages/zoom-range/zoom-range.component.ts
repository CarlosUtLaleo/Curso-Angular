import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
	selector: 'app-zoom-range',
	templateUrl: './zoom-range.component.html',
	styleUrls: ['./zoom-range.component.css'],
})
export class ZoomRangeComponent implements OnInit, AfterViewInit {
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

		this.mapa.on('zoom', (ev) => {
			this.zoomLevel = this.mapa.getZoom();
		});
		this.mapa.on('zoomend', (ev) => {
			if (this.mapa.getZoom() > 18) {
				this.mapa.zoomTo(18);
			}
		});

		this.mapa.on('move', (ev) => {
			const targer = ev.target;
			const { lng, lat } = targer.getCenter();
			this.center = [lng, lat];
		});
	}

	ngOnInit(): void {}

	zoomIn() {
		this.mapa.zoomIn();
	}

	zoomOut() {
		this.mapa.zoomOut();
	}

	zoomCambio(valor: string) {
		this.mapa.zoomTo(Number(valor));
	}
}
