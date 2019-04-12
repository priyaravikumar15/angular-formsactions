import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { FormBuilder } from'@angular/

import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListallComponent } from './listall.component';
import { routing } from './app.routing';
import { AddComponent } from './add/add.component';

@NgModule({
  imports:[ BrowserModule, FormsModule,ReactiveFormsModule,RouterModule,routing ],
  declarations: [ AppComponent, HelloComponent,AddComponent,ListallComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

