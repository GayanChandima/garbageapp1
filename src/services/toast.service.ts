import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class ToastService{

constructor(private toastctrl:ToastController){}
    show(message:string,duration:number =1000){
        return  this.toastctrl
        .create({
            message,
            duration
        })
            .present()
    }
        


}