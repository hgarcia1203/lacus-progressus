import { Component } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Producto } from '../models/producto';

@Component ({
    selector: 'producto-agregar',
    templateUrl: '../views/producto-agregar.html',
    styleUrls: ['../styles-views/producto-agregar.css'],
    providers: [ProductoService]
})

export class ProductoAgregarComponent {
    public titulo: string;

    public productoForm: FormGroup;

    public producto: Producto = {
        id: 0,
        nombre: '',
        descripcion: '',
        precio: 0,
        imagen: ''
      }

    constructor(
        private location: Location,
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ){
        this.titulo = 'Nuevo Producto';
    }

    /*crearProducto() {
        this._productoService.addProducto(this.producto).subscribe(
            () => {
              this._router.navigateByUrl("/producto");
            },
            err => {
              console.log(err);
            }
        );
    }*/

    ngOnInit() {
        this.productoForm = new FormGroup({
            nombre: new FormControl('', [Validators.required, Validators.maxLength(40)]),
            descripcion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            precio: new FormControl('', [Validators.required]),
            imagen: new FormControl('')
        });
    }
    
    public hasError = (controlName: string, errorName: string) =>{
        return this.productoForm.controls[controlName].hasError(errorName);
    }
    
    public onCancel = () => {
        this.location.back();
    }
    
    public crearProducto = (productoFormValue) => {
        if (this.productoForm.valid) {
          this.executeCrearProducto(productoFormValue);
        }
    }
    
    private executeCrearProducto = (productoFormValue) => {
        this.producto = {
            id: 0,
            nombre: productoFormValue.nombre,
            descripcion: productoFormValue.descripcion,
            precio: productoFormValue.precio,
            imagen: productoFormValue.imagen
        }
        
        this._productoService.addProducto(this.producto).subscribe(
            () => {
              this._router.navigateByUrl("/producto");
            },
            err => {
              console.log(err);
            }
        );
    }
}