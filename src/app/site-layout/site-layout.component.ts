import {Component, OnInit, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  cartArray: number;
  getStatus: any;
  username:any;

  constructor(@Inject(DOCUMENT) private document: Document, 
  public cartService: CartService,
  public authService: AuthService,
  public aufAuth: AngularFireAuth,
  private router: Router) {
    this.cartArray = this.cartService.getItems.length;
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  if (document.body.scrollTop > 60 ||     
  document.documentElement.scrollTop > 60) {
    document.getElementById('topHeader').classList.add('fixedheader');
  }
  else {
    document.getElementById('topHeader').classList.remove('fixedheader');
  }
}


  ngOnInit(): void {
    this.cartArray = this.cartService.getItems().length;

    this.cartService.getItems()
    this.getStatus = this.authService.getUserStatus();

    this.aufAuth.auth.onAuthStateChanged((user) => {
      
      if(user) {
        this.username = user.displayName;
        this.getStatus = true;
      }
      else {
        this.getStatus = false;
      }
    });

  }

  logOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
