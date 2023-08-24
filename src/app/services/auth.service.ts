import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  registrationUser({ login, password }: IUser) {
    localStorage.setItem('login', JSON.stringify(login));
    localStorage.setItem('password', JSON.stringify(password));
  }

  loginUser({ login, password }: IUser) {
    const loginUser = localStorage.getItem('login');
    const passwordUser = localStorage.getItem('password');
    if (
      JSON.stringify(login) === loginUser &&
      JSON.stringify(password) === passwordUser
    ) {
      this.router.navigate(['/post']);
    } else {
      return alert('Incorrect password');
    }
  }
  isLoggedUser() {
    const loginUser = localStorage.getItem('login');
    const passwordUser = localStorage.getItem('password');
   if(loginUser && passwordUser){
    return true
   }
   else{
    return false
   }
  }
}
