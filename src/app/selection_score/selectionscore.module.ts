import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectionScorePageRoutingModule } from './selectionscore-routing.module';

import { SelectionScorePage } from './selectionscore.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectionScorePageRoutingModule
  ],
  declarations: [SelectionScorePage]
})
export class SelectionScorePageModule {}
