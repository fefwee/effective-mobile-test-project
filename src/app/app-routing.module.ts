import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard} from './auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth-pages/auth-page.module').then(
        (c) => c.AuthPageModule
      ),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./pages/table-post/table-post.module').then(
        (c) => c.TablePostModule
      ),
      canActivate:[authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
