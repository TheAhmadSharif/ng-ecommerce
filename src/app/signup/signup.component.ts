import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  notification: any;

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit(): void {

    
  }

  createUser() {
    var email = '234ahmadshorif@gmail.com';
    var password = '123456';

      this.auth.auth.createUserWithEmailAndPassword(email, password).then(success => {
        console.log(success);
      })
      .catch(error => {

          this.notification = error.message;
        
          });
        
  }

}
