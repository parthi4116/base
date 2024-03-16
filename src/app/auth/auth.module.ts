import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'registartion',
      component: RegistrationComponent
    }]
}];

@NgModule({
  declarations: [
    AuthComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule, RouterModule.forChild(routes),
    ToastrModule.forRoot(),]
})

export class AuthModule { }
