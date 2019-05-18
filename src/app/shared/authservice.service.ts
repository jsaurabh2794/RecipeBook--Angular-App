import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Authservice {

    token = '';

   constructor(private router: Router) {}

  signupUser(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
              console.log(error);
        });
  }

  signinUser(email: string, password: string ){
     firebase.auth().signInWithEmailAndPassword(email, password)
       .then((response) => {
         console.log(response);
         this.router.navigate(['/']);
         firebase.auth().currentUser.getIdToken()
           .then((token: string) => {
               this.token = token;
           });
       })
       .catch((error) => {
           console.log(error)  ;
       });
  }


  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => {
          this.token  = token;
      });
    return this.token;
  }

  isAuthenticated() {
    return this.token !== '';
  }

  onLogout() {
    firebase.auth().signOut();
    this.token = '';
  }
}