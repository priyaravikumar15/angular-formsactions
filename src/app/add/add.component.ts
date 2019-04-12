import { Component } from '@angular/core';

@Component({
  selector: 'addlist',
  templateUrl: './add.component.html',
  //styleUrls: [ './add.component.css' ]
})
export class AddComponent  {

  add:addcontact[];
  parentdata:string;
  constructor(){
    this.add =[{id:'01',username:'abc',email:'abc@gmail.com',phonenumber:'451226'},
              {id:'02',username:'def',email:'def@gmail.com',phonenumber:'246639'},
    ];
  } 
  additems(uname,email,pnumber){
    //let a:any = this.add.push();
    //console.log(Array:add);
    this.add.push();
    //console.log( Array <add> );
  }
  remove(uname){
    this.add.pop();
  }
}
export class addcontact{
  id:number;
  username:string;
  email:string;
  phonenumber:number;
}
