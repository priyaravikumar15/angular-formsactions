import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListallComponent } from './listall.component';
import { AlwaysAuthGuard } from './AlwaysAuthGuard';
import { OnlyLoggedInUsersGuard } from './OnlyLoggedInUsersGuard ';

const approuting:Routes =[
  {
    path:'add',
    component:AddComponent,
  },
  {
    path:'listall',
    component:ListallComponent,
    canActivate:[AlwaysAuthGuard,OnlyLoggedInUsersGuard],
  }
]
export const routing = RouterModule.forRoot(approuting);