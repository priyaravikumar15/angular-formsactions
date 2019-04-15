import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './listall.component.html',
  //styleUrls: [ './app.component.css' ]
})

export class ListallComponent  {
  name = 'Angular';
 // public parentdata:string; 
  @ Input() parentdata:string;
 // @ Output() childdata :number = new EventEmitter();
 // @Input() name: string;
 edit(){
   alert({uname:JSON});
 }
}