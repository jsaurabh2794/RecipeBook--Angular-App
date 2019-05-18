import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authservice } from '../../shared/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authServ: Authservice) { }

  ngOnInit() {
  }

  onSubmit(signUpForm: NgForm) {
      const email = signUpForm.form.value.email;
      const pass = signUpForm.form.value.password;
      this.authServ.signupUser(email, pass);
  }
}
