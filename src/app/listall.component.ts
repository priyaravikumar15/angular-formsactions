import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './listall.component.html',
  //styleUrls: [ './app.component.css' ]
})

export class ListallComponent  {
  childdata = 'Angular';
 // public parentdata:string; 
  @ Input() parentdata:string;
  @Input() ds:any;
  //@ Output() childdata:EventEmitter<string> = new EventEmitter<string>();
 // @Input() name: string;
 edit(){
  
 }
}