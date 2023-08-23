import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IUser } from 'src/app/models/IUser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-pages',
  templateUrl: './auth-pages.component.html',
  styleUrls: ['./auth-pages.component.css'],
})
export class AuthPagesComponent implements OnInit {
  public form!: FormGroup;
  public isLogin = false;
  constructor(private authService: AuthService) {}

  getDataUser(data: IUser) {
    if (!this.isLogin) {
      this.authService.registrationUser(data);
      this.isLogin = !this.isLogin;
    } else if (this.isLogin) {
      this.authService.loginUser(data);
    }
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
