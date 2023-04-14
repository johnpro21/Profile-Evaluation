import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable, Subscription, map, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  isHandset$: Observable<boolean> = this.breakpointObserver
  .observe(Breakpoints.Handset)
  .pipe(
    map((result) => result.matches),
    shareReplay()
  );
  login:any="login"
  isLoggedIn: boolean = false;
  private subscription!: Subscription;
  userdisplayname:any;
  photourl:any;
  DisplayName = sessionStorage.getItem('loggedUser');
  Photourl = sessionStorage.getItem('photourl');
  constructor(public router: Router, private breakpointObserver: BreakpointObserver, private angularFireAuth: AngularFireAuth){}
  
  ngOnInit(): void {
    this.subscription = this.angularFireAuth.authState.subscribe((user) => {
      this.isLoggedIn = !!user;
    });
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      user.providerData.forEach((profile)=>{
        this.userdisplayname=profile.displayName;
        this.photourl=profile.photoURL;
        sessionStorage.setItem('loggedUser', this.userdisplayname);
        sessionStorage.setItem('photourl', this.photourl);
      });
    }

  }

  logout() {
    this.angularFireAuth.signOut();
    sessionStorage.removeItem('loggedUser');
    sessionStorage.removeItem('photourl');
    this.router.navigate(['auth', 'signup']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
