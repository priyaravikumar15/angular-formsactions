import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root',
})

export class MainService {
  a=[];
  constructor(){}
  additem =[
    {'id':'001','username':'abc','email':'abc@gmail.com','phonenumber':'10236'}
  ]
  getserv(v){
    console.log("service working" + v);
    return this.additem;
  }
  add(uname,email,pnumber){
      console.log('add working');
      let d:any = this.additem.push( uname,email,pnumber);
      return d;
  }
  getadditems(){
    console.log("getadditem");
    return this.additem;
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
}