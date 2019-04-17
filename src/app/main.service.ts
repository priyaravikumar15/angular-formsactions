import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root',
})

export class MainService {

  constructor(){

  }
  getserv(){
    console.log("service working");
  }
}