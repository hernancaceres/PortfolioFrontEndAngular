import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthModule } from '../auth/auth.module';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ReportesComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AuthModule
  ]
})
export class DashboardModule { }
