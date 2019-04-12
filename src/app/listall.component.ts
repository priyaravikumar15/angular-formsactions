import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './listall.component.html',
  //styleUrls: [ './app.component.css' ]
})

export class ListallComponent  {
  name = 'Angular';
 // public parentdata:string; 
  @ Input() parentdata:string;
 // @Input() name: string;
}