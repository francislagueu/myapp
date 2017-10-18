import { Credentials } from './../../models/interfaces/credentials';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';



@Injectable()
export class AuthProvider {

  constructor(public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials:Credentials){
    var promise = new Promise((resolve, reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email,credentials.password)
      .then(()=>{
        resolve(true);
      }).catch((err)=>{
        reject(err);
      });
    });
    return promise;
  }

}
