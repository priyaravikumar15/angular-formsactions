import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './listall.component.html',
  inputs:['appcomp'],
  //styleUrls: [ './app.component.css' ]
})

export class ListallComponent  {
  name = 'Angular';
  public appcomp:string; 
}