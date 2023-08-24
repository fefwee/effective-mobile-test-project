import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const hasSrorage = inject(AuthService);
  if (hasSrorage.isLoggedUser()) {
    return true;
  } else {
    router.navigate(['']);
    return false;
  }
};
