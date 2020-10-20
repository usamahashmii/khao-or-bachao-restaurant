import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseItemPage } from './choose-item.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseItemPageRoutingModule {}
