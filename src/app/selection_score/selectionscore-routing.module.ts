import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectionScorePage } from './selectionscore.page';

const routes: Routes = [
  {
    path: '',
    component: SelectionScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectionScorePageRoutingModule {}
