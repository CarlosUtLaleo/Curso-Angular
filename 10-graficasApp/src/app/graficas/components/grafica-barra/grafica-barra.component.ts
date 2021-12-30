import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
	selector: 'app-grafica-barra',
	templateUrl: './grafica-barra.component.html',
	styles: [],
})
export class GraficaBarraComponent implements OnInit {
	@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
	public barChartOptions: ChartConfiguration['options'] = {
		responsive: true,
		// We use these empty structures as placeholders for dynamic theming.
		scales: {
			x: {},
			y: {
				min: 10,
			},
		},
		plugins: {
			legend: {
				display: true,
			},
		},
	};
	public barChartType: ChartType = 'bar';

	public barChartData: ChartData<'bar'> = {
		labels: ['2020', '2021', '2022', '2023', '2025', '2026', '2027'],
		datasets: [
			{
				data: [65, 59, 80, 81, 56, 55, 40],
				label: 'Series A',
				backgroundColor: '#D261E6',
				hoverBackgroundColor: 'red',
			},
			{
				data: [28, 48, 40, 19, 86, 27, 90],
				label: 'Series B',
				backgroundColor: '#FF54C9',
				hoverBackgroundColor: 'red',
			},
			{
				data: [43, 28, 47, 29, 56, 77, 20],
				label: 'Series C',
				backgroundColor: '#B15DFC',
				hoverBackgroundColor: 'red',
			},
		],
	};

	constructor() {}

	ngOnInit(): void {}

	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public randomize(): void {
		// Only Change 3 values
		this.barChartData.datasets[0].data = [
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
		];

		this.barChartData.datasets[1].data = [
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
		];

		this.barChartData.datasets[2].data = [
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
		];
		this.chart?.update();
	}
}
