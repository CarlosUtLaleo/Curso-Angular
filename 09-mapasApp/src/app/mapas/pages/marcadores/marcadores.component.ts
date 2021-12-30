import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor {
	color: string;
	marker?: mapboxgl.Marker;
	centro?: [number, number];
}

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

	//Arreglo marcadores
	marcadores: MarcadorColor[] = [];

	constructor() {}
	ngAfterViewInit(): void {
		this.mapa = new mapboxgl.Map({
			container: this.divMapa.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: this.center,
			zoom: 17,
		});
		this.leerLocalStorage();
		// const marker = new mapboxgl.Marker().setLngLat(this.center).addTo(this.mapa);
	}

	irMarcador(marker: mapboxgl.Marker) {
		this.mapa.flyTo({
			center: marker.getLngLat(),
		});
	}
	agregarMarcador() {
		const color = '#xxxxxx'.replace(/x/g, (y) => ((Math.random() * 16) | 0).toString(16));
		const newMarcador = new mapboxgl.Marker({ draggable: true, color: color })
			.setLngLat(this.center)
			.addTo(this.mapa);

		this.marcadores.push({ color, marker: newMarcador });
		newMarcador.on('dragend', () => {
			this.guardarMarcadoresLocalStorage();
		});
		this.guardarMarcadoresLocalStorage();
	}

	guardarMarcadoresLocalStorage() {
		const lngLatArr: MarcadorColor[] = [];
		this.marcadores.forEach((m) => {
			const color = m.color;
			const { lng, lat } = m.marker!.getLngLat();

			lngLatArr.push({
				color,
				centro: [lng, lat],
			});
		});

		localStorage.setItem('marcadores', JSON.stringify(lngLatArr));
	}

	leerLocalStorage() {
		if (!localStorage.getItem('marcadores')) {
			return;
		}

		const lngLarArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

		lngLarArr.forEach((m) => {
			const newMarker = new mapboxgl.Marker({
				color: m.color,
				draggable: true,
			})
				.setLngLat(m.centro!)
				.addTo(this.mapa);
			this.marcadores.push({ marker: newMarker, color: m.color });

			newMarker.on('dragend', () => {
				this.guardarMarcadoresLocalStorage();
			});
		});
	}
	borrarMarcador(i: number) {
		this.marcadores[i].marker?.remove();
		this.marcadores.splice(i, 1);
		this.guardarMarcadoresLocalStorage();
	}
}
