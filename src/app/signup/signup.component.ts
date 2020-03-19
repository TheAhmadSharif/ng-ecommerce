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

  constructor(public aufauth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {

    
  }

  createUser(email:string, password:string) {
    var emailaddress = email;
    var userpassword = password;

      /*this.aufauth.auth.createUserWithEmailAndPassword(email, password).then(success => {
        console.log(success, 'success');
        this.notification = "You have successfully signup in our system. Please login to place a order.";

      })
      .catch(error => {

          this.notification = error.message;
        
          });*/


     /* this.aufauth.auth.onAuthStateChanged(user => {
      if (user) {
        // show email in welcome message
        this.email = user.email;
        // call method that selects when authenticated
        this.selectItems(user.uid);
      }
    });*/


    /*  this.aufauth.auth.authState(user => {
      if (user) {
        console.log(user);
      }
    });*/

    console.log(this.aufauth, 'this.aufauth');




        
  }

}
