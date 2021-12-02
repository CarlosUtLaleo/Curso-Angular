import { NgModule } from '@angular/core';

//PrimeNg
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
	exports: [ButtonModule, CardModule, MenubarModule],
})
export class PrimeNgModule {}
