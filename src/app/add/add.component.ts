import { Component } from '@angular/core';

@Component({
  selector: 'addlist',
  templateUrl: './add.component.html',
  //styleUrls: [ './add.component.css' ]
})
export class AddComponent  {

  add:addcontact[];
  appcom:string;
  constructor(){
    this.add =[{username:'abc',email:'abc@gmail.com',phonenumber:'451226'},
              {username:'def',email:'def@gmail.com',phonenumber:'246639'}
    ];
  } 
  additems(uname,email,pnumber){
    //let a:any = this.add.push();
    //console.log(Array:add);
    console.log( uname,email,pnumber );
    this.add.push();
    //console.log( Array <add> );
  }
  remove(uname){
    this.add.pop();
  }
}
export class addcontact{
  username:string;
  email:string;
  phonenumber:number;
}
