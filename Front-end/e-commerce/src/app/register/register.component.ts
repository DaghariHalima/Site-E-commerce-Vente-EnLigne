import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { User } from '../models/User';





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  errorMessage :any;
  successMessage :any;
  items: User[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private apollo: Apollo,) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.initRegisterForm();
   }

  initRegisterForm(): void{
    this.registerForm = this.fb.group({
      sexe: this.fb.control('', [ Validators.required]),
      pseudo: this.fb.control('', [ Validators.required]),
      lastname: this.fb.control('', [ Validators.required]),
      firstname: this.fb.control('', [ Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [ Validators.required, Validators.email]),
      password: this.fb.control('', [ Validators.required, Validators.minLength(6)]),
      dateBirth: this.fb.control('', [ Validators.required]),
    });
  }


  onSubmit() {
    console.log(this.registerForm.get('pseudo').value);

    }
  

  


}
