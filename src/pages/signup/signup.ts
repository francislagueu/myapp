import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newUser={
    email:'',
    password:'',
    displayName:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public userService: UserProvider, public loadingCtrl: LoadingController,
public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    var toaster = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom'
    });
    if(this.newUser.email=='' || this.newUser.password=='' || this.newUser.displayName==''){
      toaster.setMessage('All fields are required!!!');
      toaster.present();
    }else if(this.newUser.password.length < 7){
      toaster.setMessage('Password has to be greater than 6 characters!!!');
      toaster.present();
    }else{
      let loader = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loader.present();
      this.userService.addUser(this.newUser)
      .then((res:any)=>{
        loader.dismiss();
        if(res.success){
          this.navCtrl.push('ProfilePicturePage');
        }else{
          alert('Error '+res);
        }
      });
    }
  }

  goback(){
    this.navCtrl.setRoot('LoginPage');
  }

}
