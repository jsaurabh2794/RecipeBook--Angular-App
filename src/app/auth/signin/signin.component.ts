import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authservice } from '../../shared/authservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: Authservice ) { }

  ngOnInit() {
  }

  onSignIn(signUpForm: NgForm) {
    const email = signUpForm.form.value.email;
    const pass = signUpForm.form.value.password;
    this.authService.signinUser(email, pass);
  }

}
