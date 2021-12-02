import { NgModule } from '@angular/core';

//PrimeNg
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
	exports: [ButtonModule, CardModule],
})
export class PrimeNgModule {}
