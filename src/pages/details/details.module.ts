import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DetailsPage),
  ],
})
export class DetailsPageModule {}
