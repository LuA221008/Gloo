import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirecToLogin = () => redirectUnauthorizedTo(['/gloo/home']);
const routes: Routes = [
  {
    path: 'gloo',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'gloo',
    loadChildren: () =>
      import('./private/private.module').then((module) => module.PrivateModule),
    ...canActivate(redirecToLogin),
  },
  {
    path: '**',
    redirectTo: 'gloo/home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'gloo/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
