import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import{ GlobalConstants } from '../models/shared';

import { Apollo, gql } from 'apollo-angular';
import { User } from 'src/app/models/User';

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
      password

    }
  }
`;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  loginForm: FormGroup | any;
  errorMessage : any;
  id =0;
  users: User[] = [];


  constructor(private router: Router,
              private apollo: Apollo, 
              private fb: FormBuilder) {

   }

  ngOnInit(): void { 
    window.scrollTo(0,0);
    this.initFormLogin();
    
  }

  initFormLogin(): void{
    this.loginForm = this.fb.group({
      email: this.fb.control('',Validators.email),
      password: this.fb.control('',Validators.minLength(5))
    });
  }

  onSubmit(): void{ 

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.apollo
      .watchQuery<any>({
        query: GET_USERS,
      })
      .valueChanges.subscribe(({ data, loading }) => {
       
        while(this.id < 6){
          if(data.users[this.id].email == email && data.users[this.id].password == password){
            this.router.navigate(['/category/1']);
            GlobalConstants.UserConn =true;
            GlobalConstants.UserName = data.users[this.id].name;
            break;
          }else{
            this.id = this.id+1;
          }
          
        } 
        
        
             
      });

    
  }

}
