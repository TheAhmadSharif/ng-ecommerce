import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userData = {
    email: '',
    displayName: '',
    emailVerified: false,
    uid: '',
    creationTime: '',
    lastSignInTime: ''
  };

  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData.email = user.email;
        this.userData.emailVerified = user.emailVerified;
        this.userData.displayName = user.displayName;
        this.userData.creationTime = user.metadata.creationTime;
      } else {
       
      }
    })
  }

}
