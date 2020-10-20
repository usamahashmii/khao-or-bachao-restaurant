import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegionalManagerPage } from './regional-manager.page';

const routes: Routes = [
  {
    path: '',
    component: RegionalManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegionalManagerPageRoutingModule {}
