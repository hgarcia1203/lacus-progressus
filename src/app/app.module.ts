//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio.components';
import { ProductoListaComponent } from './components/producto-lista.component';
import { ProductoAgregarComponent } from './components/producto-agregar.component';
import { ErrorComponent } from './components/error.component'
import { ProfileComponent } from './components/profile.component';
import { LoginComponent } from './components/login.component';
import { RegisterComponent } from './components/register.component';
import { HomeComponent } from './components/home.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { SidenavListComponent } from './components/navigation/sidenav-list/sidenav-list.component';

//Servicios
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoListaComponent,
    ProductoAgregarComponent,
    ErrorComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService, 
    ProductoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
