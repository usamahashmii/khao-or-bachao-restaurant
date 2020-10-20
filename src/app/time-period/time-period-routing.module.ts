import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimePeriodPage } from './time-period.page';

const routes: Routes = [
  {
    path: '',
    component: TimePeriodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimePeriodPageRoutingModule {}
