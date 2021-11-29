import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

//Tarea:
//Crear un modulo llamado ContadorModule
//Declaraciones y exportaciones

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeroesModule, ContadorModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
