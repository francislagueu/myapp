import { AuthProvider } from './../../providers/auth/auth';
import { Credentials } from './../../models/interfaces/credentials';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  credentials = {} as Credentials;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signin(){
    this.authService.login(this.credentials)
    .then((res:any)=>{
      if(!res.code){
        this.navCtrl.setRoot('TabsPage');
      }else{
        console.log(res);
      }
    });
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

  passwordReset(){
    this.navCtrl.push('PasswordresetPage');
  }

}
