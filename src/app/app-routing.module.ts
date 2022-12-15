import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DestinosComponent } from './components/destinos/destinos/destinos.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { NuestroPaisComponent } from './components/nuestro-pais/nuestro-pais.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [

  { path: '', redirectTo: 'Inicio', pathMatch: 'full' },
{
  path:'Inicio',
  component:InicioComponent
},
{
  path:'Destino',
  component:DestinosComponent
},
{
  path:'Sobre Nosotros',
  component:SobreNosotrosComponent
},
{
  path:'Nuestro Pais',
  component:NuestroPaisComponent
},
{
  path:'Admin',
  component:AdminComponent  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
