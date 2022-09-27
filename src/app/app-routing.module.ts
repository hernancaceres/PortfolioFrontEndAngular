import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule )},
  { path:'productos',loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)},
  { path: 'dashboard', loadChildren: () => import('./intranet/dashboard.module').then(m => m.DashboardModule)},

  { path: '**', redirectTo: 'auth', pathMatch:"full" },
  { path: '', redirectTo: 'login', pathMatch:"full"},
  { path:'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
