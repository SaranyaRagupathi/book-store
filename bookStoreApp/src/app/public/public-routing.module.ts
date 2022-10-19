import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: '', redirectTo:'all-books',pathMatch:'full'},
      { path: 'all-books', component: AllBooksComponent },
      { path: 'book-details/:id/author/:authorId', component: BookDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
