import { SignupPageModule } from './../pages/signup/signup.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {firebase} from '../firebase/firebase';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireModule} from 'angularfire2';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ImagehandlerProvider } from '../providers/imagehandler/imagehandler';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    TabsPageModule,
    SignupPageModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    ImagehandlerProvider
  ]
})
export class AppModule {}
