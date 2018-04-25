import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
 

  sign_in(){
    this.navCtrl.push(LoginPage);
  }

  sign_up(){
    this.navCtrl.push(RegisterPage);
  }
}
