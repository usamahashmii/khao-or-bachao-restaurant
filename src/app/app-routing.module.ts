import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login', 
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'nointernet',
    loadChildren: () => import('./nointernet/nointernet.module').then( m => m.NointernetPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'term',
    loadChildren: () => import('./term/term.module').then( m => m.TermPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./selection/selection.module').then( m => m.SelectionPageModule)
  },
  {
    path: 'resturant-setup',
    loadChildren: () => import('./resturant-setup/resturant-setup.module').then( m => m.ResturantSetupPageModule)
  },
  {
    path: 'resturant-payment',
    loadChildren: () => import('./resturant-payment/resturant-payment.module').then( m => m.ResturantPaymentPageModule)
  },
  {
    path: 'resturant-image',
    loadChildren: () => import('./resturant-image/resturant-image.module').then( m => m.ResturantImagePageModule)
  },
  {
    path: 'resturant-menu',
    loadChildren: () => import('./resturant-menu/resturant-menu.module').then( m => m.ResturantMenuPageModule)
  },
  {
    path: 'congrats',
    loadChildren: () => import('./congrats/congrats.module').then( m => m.CongratsPageModule)
  },
  {
    path: 'congrats-accepted',
    loadChildren: () => import('./congrats-accepted/congrats-accepted.module').then( m => m.CongratsAcceptedPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'discount',
    loadChildren: () => import('./discount/discount.module').then( m => m.DiscountPageModule)
  },
  {
    path: 'qr-reader',
    loadChildren: () => import('./qr-reader/qr-reader.module').then( m => m.QrReaderPageModule)
  },
  {
    path: 'choose-item',
    loadChildren: () => import('./choose-item/choose-item.module').then( m => m.ChooseItemPageModule)
  },
  {
    path: 'item-discount',
    loadChildren: () => import('./item-discount/item-discount.module').then( m => m.ItemDiscountPageModule)
  },
  {
    path: 'reservation-detail',
    loadChildren: () => import('./reservation-detail/reservation-detail.module').then( m => m.ReservationDetailPageModule)
  },
  {
    path: 'time-period',
    loadChildren: () => import('./time-period/time-period.module').then( m => m.TimePeriodPageModule)
  },
  {
    path: 'item-edit',
    loadChildren: () => import('./item-edit/item-edit.module').then( m => m.ItemEditPageModule)
  },
  {
    path: 'edit-day-discount',
    loadChildren: () => import('./edit-day-discount/edit-day-discount.module').then( m => m.EditDayDiscountPageModule)
  },
  {
    path: 'alert-confirm',
    loadChildren: () => import('./alert-confirm/alert-confirm.module').then( m => m.AlertConfirmPageModule)
  },
  {
    path: 'offer-detail',
    loadChildren: () => import('./offer-detail/offer-detail.module').then( m => m.OfferDetailPageModule)
  },
  {
    path: 'customer-support',
    loadChildren: () => import('./customer-support/customer-support.module').then( m => m.CustomerSupportPageModule)
  },
  {
    path: 'regional-manager',
    loadChildren: () => import('./regional-manager/regional-manager.module').then( m => m.RegionalManagerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
