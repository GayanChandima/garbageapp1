import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ViwebrokenitemsPage } from '../viwebrokenitems/viwebrokenitems';
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the AdditemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additems',
  templateUrl: 'additems.html',
})
export class AdditemsPage {
  itemlists: AngularFireList<any>;

  constructor(private toast: ToastController, public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.itemlists = db.list('/items');

  }

  createitem(iname, price, nego, url) {
    try {
      this.itemlists.push({
        inmae: iname,
        price: price,
        nego: nego,
        url: url
      }).then(newPerson => {
        this.navCtrl.push(ViwebrokenitemsPage);
      }, error => { console.log(error); }, );
    }
    catch (e) {
      this.toast.create({
        message: "need to fill alll",
        duration: 1000,
        cssClass: "error"
      }).present();
      console.error(e);
    }
  }




  /*
    choose(){
      this.fileChooser.open().then((uri)=>{
          alert(uri);
  this.file.resolveLocalFilesystemUrl(uri).then((newurl)=>{
    alert(JSON.stringify(newurl));
    let dirPath=newurl.nativeURL;
    let dirpathsegments=dirPath.split('/')
    dirpathsegments.pop()
    dirPath=dirpathsegments.join('/')
    this.file.readAsArrayBuffer(dirPath,newurl.name).then(async(buffer)=>{
     await this.upload(buffer,newurl.name);
    })
  
  })
      })
    }
    async upload(buffer,name){
      let blob=new Blob([buffer],{type:"image/jpeg"})
  
      let storage = firebase.storage();
      storage.ref('images/' +name).put(blob).then((d)=>{
        alert("Done");
      }).catch((error)=>{
        alert(JSON.stringify(error))
      })
    }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemsPage');
  }

  viewb() {
    this.navCtrl.push(ViwebrokenitemsPage);
  }
  
}


