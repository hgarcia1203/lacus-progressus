import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio.components';
import { ProductoListaComponent } from './components/producto-lista.component';
import { ProductoAgregarComponent } from './components/producto-agregar.component';
import { ErrorComponent } from './components/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'producto',
    component: ProductoListaComponent,
  },
  {
    path: 'producto-agregar',
    component: ProductoAgregarComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
