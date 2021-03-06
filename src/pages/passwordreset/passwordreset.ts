import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage { 
  email:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userService:UserProvider, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordresetPage');
  }

  reset(){
    let alert = this.alertCtrl.create({
      buttons:['OK']
    });
    this.userService.passwordreset(this.email)
    .then((res:any)=>{
      if(res.success){
        alert.setTitle('Email Sent');
        alert.setSubTitle('Please follow the instructions in the email to reset your password.');
      }else{
        alert.setTitle('Failed');
      }
    });
  }

  goback(){
    this.navCtrl.setRoot('LoginPage');
  }

}
