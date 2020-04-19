import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
 
@Injectable()
export class ProductoService{
    public url: string;
 
    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }
 
    getProductos(): Observable<any>{
        return this._http.get(this.url + 'productos');
    }
 
    addProducto(producto: Producto): Observable<any>{
        let json = JSON.stringify(producto);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        return this._http.post(this.url+'productos', params, {headers: headers});
    }
}