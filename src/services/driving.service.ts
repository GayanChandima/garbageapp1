import{IDriver} from '../models/idriver.model';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
@Injectable()
export class DrivingService{

    private DriverListRef=this.db.list<IDriver>('Drivers-list');
    constructor(private db: AngularFireDatabase){

    }

    getDriverList(){
        return this.DriverListRef;
    }

    addDriver(idriver:IDriver){
        return this.DriverListRef.push(idriver);
    }

    removeDriver(idriver:IDriver)
    {
        return this.DriverListRef.remove(idriver.key);
    }

}