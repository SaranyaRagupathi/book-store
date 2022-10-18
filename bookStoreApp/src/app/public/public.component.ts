import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
 bookId:number=10;
 authorId:number=100;
  constructor() { }

  ngOnInit(): void {
  }

}
