import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListallComponent } from './listall.component';

const approuting:Routes =[
  {
    path:'add',
    component:AddComponent,
  },
  {
    path:'listall',
    component:ListallComponent,

  }
]
export const routing = RouterModule.forRoot(approuting);