import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../models/shared';
import { Product } from '../models/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserCnx = GlobalConstants.UserConn;
  Name = GlobalConstants.UserName;
  cartData : Product[] = [];
  wishData : Product[] = [];
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void { 
    this.cartData = GlobalConstants.Cart;
    this.wishData = GlobalConstants.Wish;
  }

  logout(){
    GlobalConstants.Cart = [];
    GlobalConstants.UserConn = false;
    GlobalConstants.UserName =""
    this.router.navigate(['/']);
  }

  search(id :number){
    this.router.navigate(['/category/id']);
  }


}
