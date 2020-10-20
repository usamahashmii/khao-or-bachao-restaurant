import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertConfirmPage } from './alert-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: AlertConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertConfirmPageRoutingModule {}
