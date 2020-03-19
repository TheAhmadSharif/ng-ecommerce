import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


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
    public afAuth: AngularFireAuth,
    private router: Router) { }
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
    this.router.navigate(['/']);
    console.log('Authservice is called');
  }

}
