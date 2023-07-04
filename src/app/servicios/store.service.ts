import { Injectable } from '@angular/core';
import { Producto } from '../modelos/producto.modelo';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  carritoDeCompras : Producto[] = [];
  productos : Producto[] = [];
  categorias : string[]= []
  cantidadTotal: number = 0;
  total: number = 0;
  subscripcionProductos!: Subscription;
  constructor(public productosService : ProductosService) { }

  public carrito = new BehaviorSubject<Producto[]>([]);
  carrito$ = this.carrito.asObservable();

  public productosOb = new BehaviorSubject<Producto[]>([]);
  productosOb$ = this.productosOb.asObservable();

  public categpriasOb = new BehaviorSubject<string[]>([]);
  categoriasOb$ = this.categpriasOb.asObservable();

  agregarProducto(producto: Producto){
    const productoExistente = this.verificarSiExiste(producto);
    if (productoExistente && productoExistente.cantidad){
      productoExistente.cantidad += 1;
      productoExistente.total = productoExistente.cantidad * producto.price;
    }else{
      producto.total = producto.price;
      this.carritoDeCompras.push({ ...producto, cantidad: 1 });
    }
    this.calcularCantidadProductos()
    this.carrito.next(this.carritoDeCompras);
    this.calcularTotalCarrito()
  }

  verificarSiExiste(producto: Producto){
    return  this.carritoDeCompras.find(item => item.id === producto.id);
  }

  calcularCantidadProductos(){
    this.cantidadTotal = this.carritoDeCompras.reduce((total, producto) => total + (producto.cantidad ?? 0), 0);
  }

  calcularTotalCarrito(){
    this.total = this.carritoDeCompras.reduce((total, producto) => total + (producto.total ?? 0), 0);
    this.carrito.next(this.carritoDeCompras);
  }

  eliminarProducto(producto : Producto){
    let index = this.carritoDeCompras.findIndex(objeto => objeto.id === producto.id);
    if (index !== -1) {
      this.carritoDeCompras.splice(index, 1); 
      this.calcularCantidadProductos()
      this.calcularTotalCarrito()
    }
  }

  getCarritoDeCompras(){
    return this.carritoDeCompras
  }

  obtenerProductos(){
   this.productosService.obtenerTodosLosProductos().subscribe(res =>
      {this.productos = res
      this.productosOb.next(this.productos)
      this.obtenerCategorias()
      }, error => {
        console.log(console.log(error));
      }
    ) ;
  }

  // filtrarPorCategoria( categoryName: string) {
  //   if (this.subscripcionProductos) {
  //     this.subscripcionProductos.unsubscribe()
  //   }
  //   this.obtenerProductos()
  //   this.productos = this.productos.filter(product => product.category.name === categoryName);
  //   this.productosOb.next(this.productos)
  // }

  obtenerCategorias(){
    this.categorias = this.productos.map(producto => producto.category.name)
                          .filter((categoria, index, array) =>array.indexOf(categoria) === index);
    this.categpriasOb.next(this.categorias)
  }
}
