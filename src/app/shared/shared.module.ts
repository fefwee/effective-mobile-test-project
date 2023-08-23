import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailPostComponent } from './components/detail-post/detail-post.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../shared-material/material.module';

@NgModule({
    imports:[CommonModule,RouterModule,ReactiveFormsModule,FormsModule,MaterialModule],
    declarations:[
        DetailPostComponent,
        ButtonComponent,
        HeaderComponent
    ],
    exports:[
        DetailPostComponent,
        ButtonComponent,
        HeaderComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule {}