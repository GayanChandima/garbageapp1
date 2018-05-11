import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustprofilesPage } from './custprofiles';
import { AngularFireDatabase} from 'angularfire2/database'
@NgModule({ 
  declarations: [
    CustprofilesPage,
  ],
  imports: [
    IonicPageModule.forChild(CustprofilesPage),
  ],
})
export class CustprofilesPageModule {}
