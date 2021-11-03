import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { GlobalConstants } from '../models/shared';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product: Product[] = [];  
  UserCnx = GlobalConstants.UserConn;
  closeResult: string | any;

  constructor(private router: Router,
    private modalService: NgbModal) { }

  ngOnInit(): void {

      this.product = GlobalConstants.Prod;
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
}
