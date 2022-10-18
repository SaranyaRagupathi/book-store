import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public name:string='';
  public email:string='';
  public user:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParam =>{
      this.name = queryParam['name'];
      this.email = queryParam['email'];
      this.user = queryParam['user'];
      console.log(queryParam);
    });
  }

}
