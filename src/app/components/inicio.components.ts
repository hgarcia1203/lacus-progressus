import { Component } from '@angular/core'

@Component ({
    selector: 'inicio',
    templateUrl: '../views/inicio.html'
})

export class InicioComponent {
    public titulo:string;

    constructor(){
        this.titulo = 'Pagina principal';
    }

    ngOnInit() {
        console.log('Cargado componente incio');
    }
}