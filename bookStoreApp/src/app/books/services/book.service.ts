import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  "providedIn":"root"
})
export class BookService {

  constructor() { }
  public getBooks(): BookModel[] {
    return [
      {
        "id": 1,
        "title": 'Angular Fundamentals',
        "totalPages": 470,
        "author": 'Ram Singh',
        "price": {
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 2,
        "title": 'Java Fundamentals',
        "totalPages": 340,
        "author": 'Herbert Schildt',
        "price": {
          "currency": "USD",
          "value": 23
        }
      },
      {
        "id": 3,
        "title": 'HTML & CSS',
        "totalPages": 680,
        "author": 'John Duckett',
        "price": {
          "currency": "INR",
          "value": 400
        }
      },
      {
        "id": 4,
        "title": 'The Secret of JavaScript',
        "totalPages": 230,
        "author": 'Ram Singh',
        "price": {
          "currency": "INR",
          "value": 80
        }
      },
      {
        "id": 2,
        "title": 'Java Fundamentals',
        "totalPages": 340,
        "author": 'Herbert Schildt',
        "price": {
          "currency": "USD",
          "value": 23
        }
      },
      {
        "id": 3,
        "title": 'HTML & CSS',
        "totalPages": 680,
        "author": 'John Duckett',
        "price": {
          "currency": "INR",
          "value": 400
        }
      },
      {
        "id": 4,
        "title": 'The Secret of JavaScript',
        "totalPages": 230,
        "author": 'Ram Singh',
        "price": {
          "currency": "INR",
          "value": 80
        }
      }
    ]
  }
}
