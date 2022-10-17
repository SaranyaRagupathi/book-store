import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddBookComponent } from './components/add-book/add-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddBookComponent,
    DeleteBookComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule
  ]
})
export class UserModule { }
