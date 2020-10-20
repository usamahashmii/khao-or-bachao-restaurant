import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongratsAcceptedPage } from './congrats-accepted.page';

const routes: Routes = [
  {
    path: '',
    component: CongratsAcceptedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongratsAcceptedPageRoutingModule {}
