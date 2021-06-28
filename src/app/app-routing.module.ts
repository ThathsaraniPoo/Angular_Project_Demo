import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {DateComponent} from "./date/date.component";

const routes: Routes = [
  {path: 'date' , component:DateComponent},
  {path: 'profile' , component:ProfileComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'register' , component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
