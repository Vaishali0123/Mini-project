import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component'

const routes: Routes = [
  {
    component:AddHospitalComponent,
    path:'add'
  },
  {
    component:ListComponent,
    path:'list'
  },
  {
    component:UpdateHospitalComponent,
    path:'update:/id'  },
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:RegisterComponent,
    path:'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
