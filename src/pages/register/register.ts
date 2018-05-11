
import { Component } from '@angular/core';
/* validation */
/*import {FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';*/

/* validatiom */
import { IonicPage, NavController, NavParams, ToastController, } from 'ionic-angular';
import { User } from '../../models/user';
/*import{User} from '../../models/user.model';*/
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

import { AngularFireDatabase } from 'angularfire2/database'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  /* validation 
    private todo :FormGroup;
  
      validatiom */
  user = {} as User;

  constructor(private toast: ToastController, private fireAuth: AngularFireAuth, private afDataBase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    /* validation try{
  this.todo =formBuilder.group({
    address1: ['',Validators.required],
    lane1: ['',Validators.required],
    number1: ['',Validators.required]   
  });
    validatiom }
    catch(e){
      console.error(e); 
    }
    */
  }


  async register(user: User) {
    try {
      const info = await this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(info);

      if (info) {
        this.navCtrl.setRoot(HomePage);
        this.fireAuth.authState.take(1).subscribe(auth => {
          this.afDataBase.object(`profile/${auth.uid}`).set(this.user).then(() => this.navCtrl.push(HomePage));

        })


      }
    }
    catch (e) {
      this.toast.create({
        message: "Invalid email or password",
        duration: 1000,
        cssClass: "error"
      }).present();
      console.error(e);
    }

  }



}
