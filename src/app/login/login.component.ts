import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

//import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';
//import { User } from '@app/shared/models/user.interface';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  onRegister() {
    console.log('Form', this.registerForm.value);
    const { mail, password } = this.registerForm.value;
    this.authService.register(mail, password);
    
  }

}
