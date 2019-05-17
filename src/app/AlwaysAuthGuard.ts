import { CanActivate } from '@angular/router';
import {Injectable } from '@angular/core';

@Injectable()
export class AlwaysAuthGuard  implements CanActivate {

  CanActivate(){
    console.log("Canactivate is working");
    return true;
  }

}