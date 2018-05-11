import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase /*,FirebaseListObservable*/} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {CustprofilesPage} from '../custprofiles/custprofiles';

@IonicPage()
@Component({
  selector: 'page-complains',
  templateUrl: 'complains.html',
})
export class ComplainsPage {
  /*peopleList:FirebaseListObservable<any>;*/

  constructor( /*public db :AngularFireDatabase,*/public navCtrl: NavController, public navParams: NavParams) {
   /*this.peopleList=db.list('/drivers')*/
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplainsPage');
  }

   /*createPerson(email,password,address,lane,number){
      this.peopleList.push({
        email:email,
        password:password,
        address:address,
        lane:lane,
        number:number
      }).then(newPerson =>{
        this.navCtrl.push(CustprofilesPage);
      },error=>{console.log(error);});

  }*/

}
