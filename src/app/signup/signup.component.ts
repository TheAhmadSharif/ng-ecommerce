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

  createUser(email:string, password:string, displayName:string) {
    var emailaddress = email;
    var userpassword = password;
    var displayName = displayName;

      this.aufauth.auth.createUserWithEmailAndPassword(email, password).then(object => {
        console.log(object, 'success');

        object.user.updateProfile({
          displayName: displayName
        }).then(user => {
            console.log(user, 'user');

            this.notification = "You have successfully signup in our system. Now, you are going to land in our system's dashboard page.";

            setTimeout(()=> {
              this.router.navigate(['dashboard/user']);
            }, 1500);

        }, function(error) {
          console.log(error, 'error');
        });      


        


      })
      .catch(error => {
          this.notification = error.message;
      });

      






     /* this.aufauth.auth.onAuthStateChanged(user => {
      if (user) {
        // show email in welcome message
        this.email = user.email;
        // call method that selects when authenticated
        this.selectItems(user.uid);
      }
    });*/


    


    console.log(this.aufauth, 'this.aufauth');




        
  }

}
