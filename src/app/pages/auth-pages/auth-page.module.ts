import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthPagesComponent } from './auth-pages.component';
import { MaterialModule } from 'src/app/shared-material/material.module';
import { AuthPageRouteModule } from './auth-page.route.module';

@NgModule({
  imports: [AuthPageRouteModule, SharedModule,MaterialModule],
  declarations: [AuthPagesComponent],
  exports: [AuthPagesComponent],
})
export class AuthPageModule {}