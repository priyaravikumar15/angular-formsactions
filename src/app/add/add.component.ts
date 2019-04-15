import { Component } from '@angular/core';

@Component({
  selector: 'addlist',
  templateUrl: './add.component.html',
  //styleUrls: [ './add.component.css' ]
})
export class AddComponent  {

  add:addcontact[];
  parentdata:string;
  childdata:number;
  constructor(){
    this.add =[{id:'01',username:'abc',email:'abc@gmail.com',phonenumber:'451226'},
              {id:'02',username:'def',email:'def@gmail.com',phonenumber:'246639'},
    ];
  } 
   additemss(){
    console.log();
  }
  additems(uname,email,pnumber){
    //let a:any = this.add.push();
    //console.log(Array:add);
     this.add.push( uname,email,pnumber );
    console.log( addcontact);
  }
  remove(uname){
    confirm("Are you sure you want to delete");
    this.add.pop();
  }
}
export class addcontact{
  id:number;
  username:string;
  email:string;
  phonenumber:number;
}
