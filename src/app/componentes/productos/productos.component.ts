import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.modelo';
import { CargandoService } from 'src/app/servicios/cargando.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  carritoDeCompras : Producto[] = [];
  productos : Producto[] = [];
  buscador = new FormControl();
  txtBuscar : string = ''

  constructor(
    private storeService : StoreService,
    private productosService : ProductosService
  ) { }

  ngOnInit(): void {
    this.carritoDeCompras = this.storeService.getCarritoDeCompras();
    this.obtenerProductos()
    this.buscar()
  }

  obtenerProductos(){
    this.storeService.obtenerProductos()
    this.storeService.productosOb$.subscribe(productos=>{
      this.productos = productos
    }, error => {
      console.log(console.log(error));
    }
    )

  }

  productoAgregado(producto: Producto){
    this.storeService.agregarProducto(producto);
  }

  buscar(){
    this.buscador.valueChanges.pipe(
      debounceTime(700)
    )
    .subscribe(b =>
      {
      this.txtBuscar = b}, error => {
        console.log(console.log(error));
      }
      )
    
  }



}
