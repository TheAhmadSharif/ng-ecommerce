import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit(): void {

    
  }

  createUser() {
    var email = 'TheAhmadSharif@gmail.com';
    var password = '123456';

    // console.log(this.auth);
      /*  this.auth.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        
          });
      */    
  }

}
