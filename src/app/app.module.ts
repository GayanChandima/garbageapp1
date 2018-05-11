import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { UrbonPage } from '../pages/urbon/urbon';
import { CustomerPage } from '../pages/customer/customer';
import {CustprofilesPage} from '../pages/custprofiles/custprofiles';
import {ComplainsPage} from '../pages/complains/complains' ;
import {DriverPage} from '../pages/driver/driver';
/*my edit */
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_INFO } from './firebase.info';
/*import {AngularFireDatabase} from 'angularfire2/database'; */
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { LocalNotifications } from '@ionic-native/local-notifications';


import {CustomerListService} from '../services/customer.list.service';
/*import { ShoppingService } from '../services/shopping.service';*/
import { ToastService } from '../services/toast.service';
import { DrivingService } from '../services/driving.service';
import {TransportPage} from '../pages/transport/transport';
import{ViwebrokenitemsPage} from '../pages/viwebrokenitems/viwebrokenitems'
import {AdditemsPage} from '../pages/additems/additems';
import { BrokenPage } from '../pages/broken/broken';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    UrbonPage,
    CustomerPage,
    CustprofilesPage,
    ComplainsPage,
    DriverPage,
    
    TransportPage,
    ViwebrokenitemsPage,
    AdditemsPage,
    BrokenPage
  ],
  imports: [ 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
   /* AngularFireDatabase,*/
    AngularFireModule.initializeApp(FIREBASE_INFO)
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    UrbonPage,
    CustomerPage,
    CustprofilesPage,
    ComplainsPage,
    DriverPage,
    
    TransportPage,
    ViwebrokenitemsPage,
    AdditemsPage,
    BrokenPage

  ],
  providers: [
    LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrivingService,
    ToastService,
    CustomerListService
  ]
})
export class AppModule {}
