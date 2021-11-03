import { Component, OnInit } from '@angular/core';
import{ GlobalConstants } from '../models/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UserCnx = GlobalConstants.UserConn;
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
