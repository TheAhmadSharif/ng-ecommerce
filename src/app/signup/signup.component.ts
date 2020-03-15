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

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {

    
  }

  createUser(email:string, password:string) {
    var emailaddress = email;
    var userpassword = password;

      this.auth.auth.createUserWithEmailAndPassword(email, password).then(success => {
        console.log(success);
        this.notification = "You have successfully signup in our system. Please login to place a order.";

      })
      .catch(error => {

          this.notification = error.message;
        
          });
        
  }

}
