import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service'
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Transporte';
  header_color: string;

  constructor() {
    this.header_color = GLOBAL.header_color;
  }
}
