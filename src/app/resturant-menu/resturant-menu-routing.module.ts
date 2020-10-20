import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResturantMenuPage } from './resturant-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ResturantMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResturantMenuPageRoutingModule {}
