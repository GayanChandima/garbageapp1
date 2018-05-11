import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { UrbonPage } from '../urbon/urbon';
import { CustomerPage} from '../customer/customer';

import { BrokenPage } from '../broken/broken';
@Component({ 
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
user = {} as User; 
  
 constructor(private fireAuth: AngularFireAuth,private toast:ToastController,  public navCtrl: NavController) {
  fireAuth.authState.subscribe(x =>console.log(x));
}
  async login(user: User)
  {
      try{
             const info = await this.fireAuth.auth.signInWithEmailAndPassword(user.email,user.password);
         /* if(info){ */
              if(user.email=='gayan7788@gmail.com',user.password=='gayan123')
                    {

                      await this.navCtrl.setRoot(UrbonPage);
                    }
              else  {
                await this.navCtrl.setRoot(CustomerPage);
                    }
                   
                  }
                
                
    catch(e){
      this.toast.create({
        message:"Invalid email or password",
        duration:1000,
        cssClass:"error"
      }).present();
          console.error(e); 
            }
  }
   
  register() 
      {
    this.navCtrl.push(RegisterPage);
       }
       itemop(){
         this.navCtrl.push(BrokenPage);
       }
}
