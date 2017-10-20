import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  userData = firebase.database().ref('/chatusers');
  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello UserProvider Provider');
  }

  addUser(newUser){
    var promise = new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(()=>{
        this.afAuth.auth.currentUser.updateProfile({
          displayName: newUser.displayName,
          photoURL:''
        }).then(()=>{
          this.userData.child(this.afAuth.auth.currentUser.uid)
          .set({
            uid:this.afAuth.auth.currentUser.uid,
            displayName:newUser.displayName,
            photoURL:''
          }).then(()=>{
            resolve({success:true});
          }).catch((err)=>{
            reject(err);
          });
        }).catch((err)=>{
          reject(err);
        });
      }).catch((err)=>{
        reject(err);
      });
    });
    return promise;
  }

  passwordreset(email){
    var promise = new Promise((resolve, reject)=>{
      firebase.auth().sendPasswordResetEmail(email)
      .then(()=>{
        resolve({success:true});
      }).catch((err)=>{
        reject(err);
      });
    });
    return promise;
  }

}
