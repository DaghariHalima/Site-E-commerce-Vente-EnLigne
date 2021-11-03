import { Component, OnInit, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from 'src/app/models/Product';
import { GlobalConstants } from '../models/shared';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



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
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  Products: Product[] = [];
  Cart: Product[] = [];
  id=0;
  products : Product[] = [];
  cartTotal=0;
  name :string | any;
  closeResult: string | any;

  constructor(private apollo: Apollo,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {

    this.name = GlobalConstants.UserName;
    this.products = GlobalConstants.Cart;

    for(var i=0; i < this.products.length;i++){
      this.cartTotal = this.cartTotal + this.products[i].price;
    }
    
    this.apollo
      .watchQuery<any>({
        query: GET_Products,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        
       this.Products = data.products;
         
        
             
      });

      this.Cart = GlobalConstants.Cart;

  }

  addCart(): void{
    this.router.navigate(['/cart']);
  }

  delete(data : Product){
    GlobalConstants.Cart.pop();
  }


  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
