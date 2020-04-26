import { Component } from '@angular/core'

@Component ({
    templateUrl: '../views/home.html'
})

export class HomeComponent {
    public titulo:string;

    constructor(){
        this.titulo = 'Pagina home';
    }

    ngOnInit() {
        console.log('Cargado componente home');
    }
}