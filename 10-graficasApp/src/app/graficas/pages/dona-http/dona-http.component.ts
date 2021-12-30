import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
	selector: 'app-dona-http',
	templateUrl: './dona-http.component.html',
	styles: [],
})
export class DonaHttpComponent implements OnInit {
	constructor(private graficasService: GraficasService) {}

	ngOnInit(): void {
		this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
			console.log(data);
			const labels = Object.keys(data);
			const value = Object.values(data);

			this.doughnutChartLabels = labels;
			this.doughnutChartData.datasets.push({ data: value });
		});
	}
	public doughnutChartLabels: string[] = [];
	public doughnutChartData: ChartData<'doughnut'> = {
		labels: this.doughnutChartLabels,
		datasets: [],
	};
	public doughnutChartType: ChartType = 'doughnut';

	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}
}
