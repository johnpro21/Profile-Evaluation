import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],

  // credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO`
};

@NgModule({
  declarations: [],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
  ],
  exports: [
    FirebaseUIModule,
    AngularFireModule,
    AngularFireAuthModule,
  ]
})
export class FirebaseModule { }
