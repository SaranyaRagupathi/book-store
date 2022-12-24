import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
import { Counter3Service } from './counter3.service';

@Injectable()
export class Counter2Service extends CounterService {
public override counter:number = 0;
  constructor(private _counterService:Counter3Service) { super(); }
  public override incCounter():void{
    this.counter+= 2;
  }
  public override decCounter():void{
    this.counter-= 2;
  }
}
