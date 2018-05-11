import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import firebase from 'firebase';*/
import {AngularFireDatabase/*,FirebaseListObservable*/,AngularFireList} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-custprofiles',
  templateUrl: 'custprofiles.html',
})
export class CustprofilesPage {
   persons : any;
  /* 
item={
  email:'hsgdshdghsdghsdg',
  password:'dfdfdjf',
  address:'dfdfdfdfdf',
  lane1:'fjfkdf',
  number:'55555'}


public myPerson = {};*/

  constructor(public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase) {
  this.db.list('profile/').valueChanges().subscribe(
    data=> {
      console.log(data)
      this.persons=data
    }
  )
  /*this.persons = db.database.list('/profile');*/
  }
  delete1(key:string){
    this.persons.remove(this.persons.$key).then(_ => console.log('item deleted!'));
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustprofilesPage');
    /*const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    personRef.on('value', personSnapshot => {
      myPerson = personSnapshot.val();
    });*/
  }

}
