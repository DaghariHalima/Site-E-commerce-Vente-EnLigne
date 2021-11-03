import { Component, OnInit, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from 'src/app/models/Product';
import { GlobalConstants } from '../models/shared';
import { Router } from '@angular/router';


const GET_Products = gql`
  query {
    products {
      id
      name
      img
      price
      category

    }
  }
`;

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  Products: Product[] = [];
  Wish: Product[] = [];
  id=0;

  constructor(private apollo: Apollo,
    private router: Router,) { }

  ngOnInit(): void {
    
    this.apollo
      .watchQuery<any>({
        query: GET_Products,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        
       this.Products = data.products;
         
        
             
      });

      this.Wish = GlobalConstants.Wish;

  }

  addCart(product :Product){
    GlobalConstants.Cart.push(product);
  }


}
