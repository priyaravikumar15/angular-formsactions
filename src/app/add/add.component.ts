import { Component } from '@angular/core';
import { MainService } from'../main.service';


@Component({
  selector: 'addlist',
  templateUrl: './add.component.html',
  //styleUrls: [ './add.component.css' ]
})
export class AddComponent  {

  add:addcontact[];
  ss=[];
  edit = []
  parentdata:string;
  childdata:string;
  constructor(public mainservice:MainService){
    /*this.add =[{id:'01',username:'abc',email:'abc@gmail.com',phonenumber:'451226'},
              {id:'02',username:'def',email:'def@gmail.com',phonenumber:'246639'},
    ];*/
  } 
   additems(uname,email,pnumber){
    console.log("Service entry");
    this.ss = this.mainservice.add( uname,email,pnumber );

  }
  /*additems(uname,email,pnumber){
    //let a:any = this.add.push();
    //console.log(Array:add);
   // console.log(JSON.stringify(a));
    let d:any = this.add.push( uname,email,pnumber);
     console.log(JSON.stringify(d));
     return d;
   // console.log( );
  }*/
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
