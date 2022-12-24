import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { Counter3Service } from './counter3.service';

@Injectable()
export class Counter2Service {
public  counter:number = 0;
  constructor() { }
  public  incCounter():void{
    this.counter+= 2;
  }
  public  decCounter():void{
    this.counter-= 2;
  }
}
