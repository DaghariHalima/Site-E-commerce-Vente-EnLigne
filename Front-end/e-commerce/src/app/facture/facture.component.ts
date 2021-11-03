import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { GlobalConstants } from '../models/shared';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  products : Product[] = [];
  cartTotal=0;
  name :string | any;

  constructor() { }

  ngOnInit(): void {
    this.name = GlobalConstants.UserName;
    this.products = GlobalConstants.Cart;

    for(var i=0; i < this.products.length;i++){
      this.cartTotal = this.cartTotal + this.products[i].price;
    }

     
  }

}
