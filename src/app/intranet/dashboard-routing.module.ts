import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [

  {path:'', component: DashboardComponent, children:[
    {path:'', component: InicioComponent,},
    {path:'usuarios', component: UsuariosComponent,},
    {path:'reportes', component: ReportesComponent,},
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
