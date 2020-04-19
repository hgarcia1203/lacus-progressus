import { Component } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto';

@Component ({
    selector: 'producto-agregar',
    templateUrl: '../views/producto-agregar.html',
    providers: [ProductoService]
})

export class ProductoAgregarComponent {
    public titulo: string;
    public productos: Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Nuevo productos';
    }

    ngOnInit() {
        console.log('Cargado componente incio');
    }
}