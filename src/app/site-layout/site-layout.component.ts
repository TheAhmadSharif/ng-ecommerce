import {Component, OnInit, HostListener, Directive, HostBinding, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CartService } from '../cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  cartArray: number;
  getStatus: any;

  constructor(@Inject(DOCUMENT) private document: Document, public cartService: CartService,
  public authService: AuthService) {
    this.cartArray = this.cartService.getItems.length;
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  if (document.body.scrollTop > 20 ||     
  document.documentElement.scrollTop > 20) {
    document.getElementById('topHeader').classList.add('fixedheader');
  }
  else {
    document.getElementById('topHeader').classList.remove('fixedheader');
  }
}


  ngOnInit(): void {
    this.cartArray = this.cartService.getItems().length;
    this.getStatus = this.authService.getUserStatus();

    console.log(this.authService.getUserStatus(), 'this.getStatus');

  }

}
