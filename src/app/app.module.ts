import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHospitalComponent } from './add-hospital/add-hospital.component';
import { UpdateHospitalComponent } from './update-hospital/update-hospital.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    AddHospitalComponent,
    UpdateHospitalComponent,
    ListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
