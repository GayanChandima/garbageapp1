import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {DrivingService} from '../../services/driving.service';
import {Observable} from 'rxjs/Observable';
import { IDriver } from '../../models/idriver.model';
import{ToastService} from '../../services/toast.service';



@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {
  idriver:IDriver ={
    dname:''  ,
    nic:'',
    wdate:'',
    stime:'',
  };
  driverList$:Observable<IDriver[]>;

  constructor(private toast:ToastService,public navCtrl: NavController, public navParams: NavParams,private driving:DrivingService) {
    this.driverList$=this.driving
    .getDriverList()
    .snapshotChanges()
    .map(changes =>{
        return changes.map(c=>({
          key:c.payload.key,
          ...c.payload.val(),
        }));
      } );
    
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }
 addDriver(idriver:IDriver){
  this.driving.addDriver(idriver).then(ref=>{
    this.toast.show(`${idriver.dname} Added!`);
   
  });
 }
 removeDriver(idriver:IDriver){
  this.driving.removeDriver(idriver)
  .then(()=>{
    this.toast.show(`${idriver.dname} deleted!`);
   
  });
}

 
}