import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

import 'firebase/storage';
import 'firebase/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userData:any;

  
  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth) { }
  ngOnInit(): void {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log(user, 'user');
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })

  }


  logOut() {
    this.authService.logout();
    console.log('Authservice is called');
  }

}
