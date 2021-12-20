import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicossComponent } from './dinamicoss/dinamicoss.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'basicos',
				component: BasicosComponent,
			},
			{
				path: 'dinamicos',
				component: DinamicossComponent,
			},
			{
				path: 'switches',
				component: SwitchesComponent,
			},
			{
				path: '**',
				redirectTo: 'basicos',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class TemplateRoutingModule {}
