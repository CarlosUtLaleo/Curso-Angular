import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
	selector: 'app-grafica-barra',
	templateUrl: './grafica-barra.component.html',
	styles: [],
})
export class GraficaBarraComponent implements OnInit {
	ngOnInit(): void {
		console.log(this.chartData);
		this.chart?.update();
	}
	@Input() labels: any = [];
	@Input() chartData: any[] = [];

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
		labels: this.labels,
		datasets: this.chartData,
	};
}
