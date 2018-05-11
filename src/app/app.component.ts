import { Component,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UrbonPage} from '../pages/urbon/urbon';
import { HomePage } from '../pages/home/home';
import { ComplainsPage } from '../pages/complains/complains';
import { CustprofilesPage } from '../pages/custprofiles/custprofiles';
import {DriverPage} from '../pages/driver/driver';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomePage;
  activePage:any;

  pages:Array <{title:string,component:any}>;

  

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen) {
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
       });*/

  this.initializeApp();
  this.pages=[
    { title:'Home',component:UrbonPage},
  { title:'complains',component:ComplainsPage},
  { title:'Residents',component:CustprofilesPage},
  { title:'drivers',component:DriverPage},
];
  this.activePage=this.pages[0];

}

initializeApp(){
  this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
  }
  openPage(page){
    this.nav.setRoot(page.component);
    this.activePage=page
    }
    checkActive(page){
      return page==this.activePage;
    }
}
