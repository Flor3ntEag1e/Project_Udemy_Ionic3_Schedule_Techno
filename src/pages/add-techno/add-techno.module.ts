import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTechnoPage } from './add-techno';

@NgModule({
  declarations: [
    AddTechnoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTechnoPage),
  ],
})
export class AddTechnoPageModule {}
