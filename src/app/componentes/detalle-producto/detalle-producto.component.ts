import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { ProductosService } from 'src/app/servicios/productos.service';
import { Producto } from 'src/app/modelos/producto.modelo';
import { StoreService } from 'src/app/servicios/store.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  producto : Producto = {
    title :'',
    id : '',
    price : 0,
    images : [],
    description : '',
    category : {id : '', name : '' }
   };
   productoAgregado :boolean = false
   

  constructor( private router : Router,
    private route : ActivatedRoute,
    private location: Location,
    private productoService : ProductosService,
    public storeService : StoreService
    ) { }

  ngOnInit(): void {
     this.getIdProducto()
  }

  verificarSiEstaEnCarrito(){
     this.storeService.verificarSiExiste(this.producto) ? this.productoAgregado = true : this.productoAgregado ;
  }

  agregarProducto(){
    this.storeService.agregarProducto(this.producto)
    if (!this.productoAgregado) this.productoAgregado = true
  }

  eliminarProducto(){
    this.storeService.eliminarProducto(this.producto)
    this.atras()
  }

  async getIdProducto(){
    let productoId = await this.route.snapshot.params["id"];
    this.productoService.obtenerUnProducto(productoId).subscribe(p =>{
      this.producto = p;
      this.verificarSiEstaEnCarrito()
    }, error => {
      console.log(console.log(error));
    })
  }

  atras():void{
    this.location.back()
  }


}
