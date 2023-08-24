import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged!: boolean;

  constructor(private serviceAuth: AuthService, private router: Router) {}

  ngOnInit():void {
    this.isLogged = this.serviceAuth.isLoggedUser();
  }

  LogoutUser() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
