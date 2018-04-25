import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') pass;
  constructor(private alertCtrl:AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message:string){
     this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
     }).present();
  }

  signInUser(){
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.pass.value)
    .then ( data =>{
      console.log('Got some data', this.fire.auth.currentUser);
      this.alert("Succes you are logged in");
      this.navCtrl.setRoot('LoggedinPage');
  
      // User logged in
    })
    .catch( error =>{
      console.log('Got an error', error);
    })
    console.log('Welcome to LoginPage',this.user.value, this.pass.value);
  }

}
