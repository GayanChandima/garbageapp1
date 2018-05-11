import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage} from '../home/home';
import { App, MenuController } from 'ionic-angular';

import { LocalNotifications, ILocalNotification } from '@ionic-native/local-notifications';
/**
 * Generated class for the UrbonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-urbon',
  templateUrl: 'urbon.html',
})
export class UrbonPage {
  noti={
    message:'today is your garbage collecting day',
    lane:'lane1'
  }



  constructor(app: App, menu: MenuController,private fireAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public localNotifications:LocalNotifications) {
    fireAuth.authState.subscribe(x =>console.log(x));
    menu.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UrbonPage');
  }
   logout(){
    this.fireAuth.auth.signOut();
    this.navCtrl.setRoot(HomePage);
           
   }
   notify(){
    this.localNotifications.schedule({
      id: 1,
      title:'this is title',
      text: 'Single ILocalNotification',
      sound:null
    
    });

   }



}
