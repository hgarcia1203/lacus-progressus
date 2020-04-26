import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
 
interface TokenResponse {
    response: string
}

@Injectable()
export class ProductoService{
    public url: string;
 
    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }
 
    getProductos(): Observable<any>{
        return this._http.get(this.url + '/productos/productos');
    }
 
    addProducto(producto: Producto): Observable<any>{
        /*let json = JSON.stringify(producto);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');*/
         
        //return this._http.post(this.url + 'productos', params, {headers: headers});
        const base = this._http.post(this.url + '/productos/productos', producto);
        
        const request = base.pipe(
            map((data: TokenResponse) => {
                return data;
            })
        );

        return request;
    }
}