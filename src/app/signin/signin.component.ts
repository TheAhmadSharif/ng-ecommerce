import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
  }

 

  doDogin(email:string, password:string) {
    console.log('login');
    return this.auth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.router.navigate(['dashboard']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
