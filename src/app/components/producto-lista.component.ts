import { Component } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto';
import { ViewChild } from '@angular/core'

@Component ({
    selector: 'producto-lista',
    templateUrl: '../views/producto-lista.html',
    styleUrls: ['../styles-views/producto-lista.css']
})

export class ProductoListaComponent {
    public titulo: string;
    //public productos: Producto;

    public displayedColumns = [        
        'nombre', 
        'descripcion', 
        'precio',
        'imagen',        
        'edit', 
        'delete'
    ];

    public dataSource = new MatTableDataSource<Producto>();

    @ViewChild(MatSort) sort: MatSort;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Productos';
    }

    ngOnInit() {
        console.log('Cargado componente inicio');

        this._productoService.getProductos().subscribe(
            producto => {
                /*if(producto.code != 200){
                    console.log(producto);
                }else{*/
                    //this.productos = producto;
                    this.dataSource.data = producto as Producto[];
                    console.log(this.dataSource.data);
                //}
            },
            err => {
                console.log(<any>err);
            }
        );
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();        
    }

    nuevoProducto() {
        this._router.navigateByUrl("/producto-agregar");    
    }

    public redirectToDetails = (id: string) => {
    
    }
   
    public redirectToUpdate = (id: string) => {
      console.log(id);
    }
   
    public redirectToDelete = (id: string) => {
      
    }
}