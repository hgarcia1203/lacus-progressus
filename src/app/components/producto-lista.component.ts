import { Component } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto';

@Component ({
    selector: 'producto-lista',
    templateUrl: '../views/producto-lista.html',
    providers: [ProductoService]
})

export class ProductoListaComponent {
    public titulo: string;
    public productos: Producto;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Pagina de productos';
    }

    ngOnInit() {
        console.log('Cargado componente incio');

        this._productoService.getProductos().subscribe(
            result => {
                if(result.code != 200){
                    console.log(result);
                }else{
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}