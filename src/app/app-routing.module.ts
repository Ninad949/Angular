import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputinfoComponent } from './inputinfo/inputinfo.component';

import {DisplayComponent} from './display/display.component'

import {DatabaseComponent} from './database/database.component'

const routes: Routes = [
  
  { path : 'disp' , component: DisplayComponent},
  { path : 'db' , component: DatabaseComponent },
  { path : 'new' , component: InputinfoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
