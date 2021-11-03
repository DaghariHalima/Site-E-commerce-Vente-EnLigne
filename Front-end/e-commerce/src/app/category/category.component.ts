import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Product } from 'src/app/models/Product';
import { GlobalConstants } from '../models/shared';
import { Router } from '@angular/router';
import { ElementFinder } from 'protractor';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


const GET_Products = gql`
  query {
    products {
      id
      name
      img
      price
      category
      description

    }
  }
`;


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  UserCnx = GlobalConstants.UserConn;
  @Input() isPaginate: boolean = true;
  Products: Product[] = [];
  id: number | any;
  closeResult: string | any;
  next = 1;


  constructor(private apollo: Apollo,
    private router: Router,
    private modalService: NgbModal) {

      
     }

  pass(page : number){
    this.next = page;
    this.verify();
  }

  ngOnInit(): void {
    this.verify();
  }

  add(product :Product | any){
    GlobalConstants.Wish.unshift(product);
  }

 
  open(content : any, product: Product) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      GlobalConstants.Cart.push(product);
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      GlobalConstants.Cart.push(product);
      
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


  search(product: Product): void{
    GlobalConstants.Prod.unshift(product);
    this.router.navigate(['/shop']);
    console.log(product);
  
  }

    verify(){
      this.apollo
      .watchQuery<any>({
        query: GET_Products,
      })
      .valueChanges.subscribe(({ data, loading }) => {

        if( this.next == 1){
          this.id=0;
          this.Products =[];
          for (var i=0;i<12;i++){
            this.Products.push(data.products[this.id]);
            console.log(this.Products); 
            this.id = this.id +1;
          }
        }else {
          if( this.next == 2){
            this.id=37;
            this.Products =[];
            for (var i=0;i<12;i++){
              this.Products.push(data.products[this.id]);
              console.log(data.products); 
              this.id = this.id +1;
            }
          }else{
            if( this.next == 3){
              this.id=60;
              this.Products =[];
              for (var i=0;i<12;i++){
                this.Products.push(data.products[this.id]);
                console.log(data.products); 
                this.id = this.id +1;
              }
            }else{
              if( this.next == 4){
                this.id=49;
                this.Products =[];
                this.Products.push(data.products[36]);
                for (var i=0;i<11;i++){
                  this.Products.push(data.products[this.id]);
                  console.log(data.products); 
                  this.id = this.id +1;
                }
       
              }else{
                if( this.next == 5){
                  this.id=12;
                  this.Products =[];
                  for (var i=0;i<4;i++){
                    this.Products.push(data.products[this.id]);
                    console.log(data.products); 
                    this.id = this.id +1;
                  } 
                  this.id = this.id+3;
          
                  for (var i=0;i<8;i++){
                    this.Products.push(data.products[this.id]);
                    console.log(data.products); 
                    this.id = this.id +1;
                  }
                }else{
                  if( this.next == 6){
                    this.id=16;
                    this.Products =[];
                    for (var i=0;i<3;i++){
                      this.Products.push(data.products[this.id]);
                      console.log(data.products); 
                      this.id = this.id +1;
                    } 
            
                    this.id = this.id+8;
            
                    for (var i=0;i<9;i++){
                      this.Products.push(data.products[this.id]);
                      console.log(data.products); 
                      this.id = this.id +1;
                    } 
                  }else{
                    if( this.next == 7){
                      this.id=84;
                      this.Products =[];
                      for (var i=0;i<12;i++){
                        this.Products.push(data.products[this.id]);
                        console.log(data.products); 
                        this.id = this.id +1;
                      } 
                    }else{
                      this.id=72;
                      this.Products =[];
                      for (var i=0;i<12;i++){
                        this.Products.push(data.products[this.id]);
                        console.log(data.products); 
                        this.id = this.id +1;
                      }
                    }
                  }
                }
              }
            }
          }
          

        }
        

      });
    }
  
  
  
}
