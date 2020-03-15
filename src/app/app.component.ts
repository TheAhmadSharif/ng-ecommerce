import {Component, OnInit, HostListener, Directive, HostBinding, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  title = 'Ecommerce App';
  cartArray: number;

  constructor(@Inject(DOCUMENT) private document: Document, public cartService: CartService) {
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
  }

}
