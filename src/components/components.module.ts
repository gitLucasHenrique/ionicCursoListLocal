import { IonicModule } from 'ionic-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SaleCardComponent } from './sale-card/sale-card';
import { CommonModule } from '@angular/common';
@NgModule({
	declarations: [SaleCardComponent],
	imports: [
		CommonModule,
		IonicModule,
	],
	exports: [SaleCardComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
})
export class ComponentsModule {}
