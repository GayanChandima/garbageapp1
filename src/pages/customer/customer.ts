import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage} from '../home/home';
import {AdditemsPage} from '../additems/additems';
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  constructor(private fireAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    fireAuth.authState.subscribe(x =>console.log(x));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  logout(){
    this.fireAuth.auth.signOut();
    this.navCtrl.setRoot(HomePage);
  }
  opensd(){
    this.navCtrl.push(AdditemsPage);
  }
}
