import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePostComponent } from './table-post.component';
import { DetailPostComponent } from 'src/app/shared/components/detail-post/detail-post.component';


const routes: Routes = [
  { path: '', component:TablePostComponent},
  {path:':id',component:DetailPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablePostRouteModule {}