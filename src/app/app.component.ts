import { Component,OnInit } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  s=[];
  constructor(public mainservice:MainService){
    
  }
   
  name = 'Angular';
  funct(count:number){
    var con = this.count + 1;
  }
  getservice(){
    this.s =  this.mainservice.getserv();
      //this.s = this.mainservice.add();
  }
}
