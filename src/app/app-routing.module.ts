import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './components/inicio.components';
import { ProductoListaComponent } from './components/producto-lista.component';
import { ProductoAgregarComponent } from './components/producto-agregar.component';
import { ErrorComponent } from './components/error.component';
import { ProfileComponent } from './components/profile.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { HomeComponent } from './components/home.component';
import { AuthGuardService } from './services/auth-guard.service';

/*const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'producto', component: ProductoListaComponent },
  { path: 'producto-agregar', component: ProductoAgregarComponent },
  { path: '**', component: ErrorComponent }
];*/

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'producto', component: ProductoListaComponent },
  { path: 'producto-agregar', component: ProductoAgregarComponent },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuardService]
  },
  { path: '**', component: ErrorComponent },
]

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
