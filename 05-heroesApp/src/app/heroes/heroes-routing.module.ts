import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';

const routes: Routes = [
	{
		path: '',
		children: [
			
			{
				path: 'listado',
				component: ListadoComponent,
			},
			{
				path: 'agregar',
				component: AgregarComponent,
			},
			{
				path: 'editar/:id',
				component: AgregarComponent,
			},
			{
				path: ':id',
				component: HeroeComponent,
				
			},
			{
				path: 'buscar',
				component: BuscarComponent,
			},
			
			{
				path: '**',
				redirectTo: 'listado',
			},
		],
	},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HeroesRoutingModule { }
