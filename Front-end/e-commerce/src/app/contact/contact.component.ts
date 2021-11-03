import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../models/shared';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  idd= GlobalConstants.UserConn;
  constructor() { }

  ngOnInit(): void {
  }

}
