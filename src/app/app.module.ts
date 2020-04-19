import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio.components';
import { ProductoListaComponent } from './components/producto-lista.component'
import { ErrorComponent } from './components/error.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductoListaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
