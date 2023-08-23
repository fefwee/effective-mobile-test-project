import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TablePostRouteModule } from './table-post.route.module';
import { TablePostComponent } from './table-post.component';
import { MaterialModule } from 'src/app/shared-material/material.module';


@NgModule({
  imports: [TablePostRouteModule, SharedModule, CommonModule,MaterialModule],
  declarations: [TablePostComponent],
  exports: [TablePostComponent, CommonModule],
})
export class TablePostModule {}