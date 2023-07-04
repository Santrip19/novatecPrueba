import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.modelo';
import { StoreService } from 'src/app/servicios/store.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  isMenuOpen = false;

 @Input() producto : Producto = {
   title :'',
   id : '',
   price : 0,
   images : [],
   description : '',
   category : {id : '', name : '' }
  };

 @Output() agregarProducto = new EventEmitter<Producto> ();

  constructor(private storeService : StoreService,
    public router : Router) {
   }

   abrirMenuAgregar() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  agregarAlCarrito() {
    this.agregarProducto.emit(this.producto)
    this.isMenuOpen = !this.isMenuOpen;
  }

  verDetalle(){
    this.router.navigate(['/detalleProducto',this.producto.id])
  }

}
