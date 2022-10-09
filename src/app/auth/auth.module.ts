import { NavbarComponent } from './../navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, NavbarComponent],
  imports: [CommonModule, AuthRoutingModule, MatInputModule],
})
export class AuthModule {}
