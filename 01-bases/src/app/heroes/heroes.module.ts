import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroreComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [HeroreComponent, ListadoComponent],
    exports: [ListadoComponent],
    imports: [CommonModule],
})
export class HeroesModule {}
