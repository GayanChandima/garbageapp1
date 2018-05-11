import{User} from '../models/user.model';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
@Injectable()
export class CustomerListService{

    private CustomerListRef=this.db.list<User>('Customer-list');
    constructor(private db: AngularFireDatabase){

    }

    getCustomerList(){
        return this.CustomerListRef;
    }

    addCustomer(user:User){
        return this.CustomerListRef.push(user);
    }

    removeCustomer(user:User)
    {
        return this.CustomerListRef.remove();
    }

}