import { Component } from '@angular/core';

import { Platform,Events, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseconfigService } from './firebaseconfig.service';

import { NetworkService } from './network.service';
import { ToasterService } from './toaster.service';
import { Routes, Router } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { RestService } from './rest.service';
import { Storage } from '@ionic/storage';

import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  checkauthenticationState: boolean = true;
  checkShopSetup: boolean = false;
  public appPagesNoAuth = [
    {
      title: 'Home',
      url: '/tabs/home',
      img: 'home.png'
    },
   {
      title: 'login',
      url: '/login',
      img: 'svp.png'
    },
    {
      title: 'Term of Use',
      url: '/term',
      img: 'svt.png'
    },
  
     /*{
      title: 'signup',
      url: '/signup',
      img: 'svp.png'
    },
   {
    title: 'Recent',
    url: '/recent',
    img: 'svp.png'
  }*/
  /*{
   title: 'SingleCategory',
   url: '/single-category',
   icon: 'home'
 }*/
  ];
  public appPagesAuth = [
    {
      title: 'Home',
      url: '/tabs/home',
      img: 'home.png'
    },
    {
      title: 'Add Item',
      url: '/resturant-menu',
      img: 'svt.png'
    },{
      title: 'QR Reader',
      url: '/qr-reader',
      img: 'share.png'
    },
    {
      title: 'Profile',
      url: '/profile',
      img: 'svp.png'
    },
    {
    title: 'Setting',
    url: '/setting',
    img: 'svs.png'
  },{
      title: 'Customer Support',
      url: '/customer-support',
      img: 'customerCare.png'
  },
  {
      title: 'Sales Person',
      url: '/customer-support',
      img: 'salesManager.png'
  },{
    title: 'Regional Manager',
    url: '/regional-manager',
    img: 'regionalManager.png'
},{
    title: 'Logout',
    url: '/login',
    img: 'logout_icon.png'
  },
    /* {
      title: 'Congrats',
      url: '/congrats',
      img: 'svp.png'
    },{
      title: 'Welcome',
      url: '/congrats-accepted',
      img: 'svp.png'
    },
    {
      title: ' resturant-image',
      url: '/resturant-image',
      img: 'svp.png'
    },
    {
      title: 'Selection',
      url: '/selection',  
      img: 'svt.png'
    }, {
      title: 'Resturant Setup',
      url: '/resturant-setup',
      img: 'svt.png'
    },{
      title: 'Resturant Payment',
      url: '/resturant-payment',
      img: 'svt.png'
    },
    {
      title: 'Resturant Menu',
      url: '/resturant-menu',
      img: 'svt.png'
    },{
      title: 'Resturant Image',
      url: '/resturant-image',
      img: 'svt.png'
    },
     */
    
  ];
  userId: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public firebaseConfiguration: FirebaseconfigService,
    public networkProvider:NetworkService,
    public events: Events,
    public toaster: ToasterService,
    public router: Router,
    public restService: RestService,
    public menuCtrl: MenuController,
    private storage: Storage,
    public navCtrl: NavController,
    public oneSignal: OneSignal,
    public toastService:ToasterService
  ) {
    const routes: Routes = [
      {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: 'schedule',
            children: [
              {
                path: '',
                loadChildren: '../schedule/schedule.module#ScheduleModule'
              }
            ]
          },
          {
            path: '',
            redirectTo: '/app/tabs/schedule',
            pathMatch: 'full'
          }
        ]
      }
    ];
  
    // Initialize Firebase
    this.firebaseConfiguration.firebaseConfiguration();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.oneSignal.startInit('e4c2c002-efd7-4cc5-9aa2-cc16376f8d8d', '879857704440');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
      // this.router.navigate(['/owner-profile'])
      });

      this.oneSignal.endInit();
      
      this.networkProvider.initializeNetworkEvents();
        // Offline event
      this.events.subscribe('network:offline', () => {
        this.router.navigate(['/nointernet']);
        this.toaster.presentToastDisconnect();
      });
      // Online event
      this.events.subscribe('network:online', () => {
        this.router.navigate(['/tabs/home']);
        this.toaster.presentToastConnect();    
      });
      this.storage.get('restaurants_id').then(restaurants_id => {
        console.log('restaurants_id'+restaurants_id);
        if(restaurants_id != '' && restaurants_id != 0 && restaurants_id != null){
          this.splashScreen.hide();
          this.menuCtrl.enable(true);
          this.navCtrl.navigateRoot('/tabs/home');
          //this.checkauthenticationState = true;
          
        }else{
          this.splashScreen.hide();
          //this.checkauthenticationState = false;
          this.menuCtrl.enable(false);
          this.navCtrl.navigateRoot('/login');
        }
      })
     // this.userId = firebase.auth().currentUser.uid;
   //  console.log(user);
     // if(user) {
     /*   console.log('true');
       // this.router.navigate(['/tabs/home']);
        firebase.database().ref('resturantSetupData/'+user.uid).once("value",snapshot => {
          console.log('Moeed');
          if(snapshot.val()){
            var restId = snapshot.val().restaurant_id;
            var stringy = JSON.stringify({
              restaurantId: restId
            });
            
              this.restService.checkStatus(stringy).subscribe(data => {
                console.log(JSON.parse(data['_body']));
                var status = JSON.parse(data['_body']).status;
                if(status == 'Approved'){
                  firebase.database().ref('restaurnatOrderStatus/'+user.uid).once("value" , snapshot => {
                    console.log(snapshot.val());
                    if(snapshot.val()){
                      ////menu enable
                      this.menuCtrl.enable(true);
                      this.checkShopSetup = true;
                      this.checkauthenticationState = true;
                      console.log(this.checkauthenticationState);
                      console.log(user.uid);
                      this.router.navigate(['/tabs/home']);
                      this.splashScreen.hide();
                    }else {
                      this.menuCtrl.enable(false);
                      this.checkShopSetup = true;
                      this.checkauthenticationState = true;
                      this.router.navigate(['/congrats-accepted']);
                      this.splashScreen.hide();
                    }
                     
                  })
                }else{
                  //this.checkShopSetup = true;
                  //this.checkauthenticationState = true;
                  //console.log(this.checkauthenticationState);
                  //console.log(user.uid);
                  //menu dis
                  this.checkShopSetup = true;
                      this.checkauthenticationState = true;
                  this.menuCtrl.enable(false);
                  this.router.navigate(['/congrats']);
                  this.splashScreen.hide();
                }
                
            } , err => {
              console.log(err);
            }) 
          }else{
            this.menuCtrl.enable(false);
            this.checkauthenticationState = true;
            console.log(this.checkauthenticationState);
            this.router.navigate(['/selection']);////////resturant-menu
            this.splashScreen.hide();
          }
        }); */
        
    /*  }else {
        this.menuCtrl.enable(false);
        this.checkauthenticationState = false;
        console.log(this.checkauthenticationState);
        this.router.navigate(['/login']);
        this.splashScreen.hide();
      }*/
   
      this.statusBar.styleDefault();
     
    });
  }
  logout(){
    var users_null=null;
    //check if user is logged in
    this.storage.set('restaurants_id' , users_null);
    this.storage.set('user_accounts_id' , users_null);
    this.storage.set('email' , users_null);
    this.toastService.presentToastFirebaseLogout();
    this.router.navigate(['/login']);
  }
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
