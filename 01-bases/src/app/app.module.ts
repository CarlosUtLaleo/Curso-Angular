import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
import { DbzService } from './dbz/services/dbz.service';
import { HeroesModule } from './heroes/heroes.module';

//Tarea:
//Crear un modulo llamado ContadorModule
//Declaraciones y exportaciones

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeroesModule, ContadorModule, DbzModule],
    providers: [DbzService],
    bootstrap: [AppComponent],
})
export class AppModule {}
