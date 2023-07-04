import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../modelos/producto.modelo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http : HttpClient
  ) { }

  obtenerTodosLosProductos(){
    return this.http.get<Producto[]>(environment.api);
  }
  obtenerUnProducto(id : string){
    return this.http.get<Producto>(`${environment.api}/${id}`)
  }

  

}
