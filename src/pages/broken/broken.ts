import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';

import { AlertController } from 'ionic-angular';

/**
 * Generated class for the BrokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-broken',
  templateUrl: 'broken.html',
})
export class BrokenPage {
  items:any;

  constructor(public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  this.db.list('items/').valueChanges().subscribe(
    data=>{
      console.log(data)
      this.items=data

    })
  }
  /*
  offer(){
    
      this.navCtrl.push(OfferPage);
      
    }
    popup(){
      this.navCtrl.pop();
    }
    update(){
      this.navCtrl.push(UpdatePage);
    }
     saveitem(){
       
     }
presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
    message: 'Do you need to call ?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'call',
        handler: () => {
          console.log('call clicked');
        }
      }
    ]
  });
  alert.present();
}
  */
  }