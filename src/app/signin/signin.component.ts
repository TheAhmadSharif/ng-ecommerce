import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthGuard } from '../guard/auth.guard';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  notification: any;

  constructor(public auth: AngularFireAuth, 
              private router: Router,
              public authService: AuthService) {
  }

  ngOnInit(): void {
  }

 

  doDogin(email:string, password:string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.authService;

        this.router.navigate(['dashboard/user']);
        
      }).catch((error) => {
        this.notification = error.message;
      })
  }

}
