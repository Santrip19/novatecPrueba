import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/producto.modelo';
import { StoreService } from 'src/app/servicios/store.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  carrito : Producto[] =[]
  constructor(public storeService : StoreService,
    public router : Router ) { }

  ngOnInit(): void {
    this.storeService.carrito$.subscribe(carrito =>{
      this.carrito = carrito 
    }, error => {
      console.log(console.log(error));
    }
    )
  }

  eliminarProducto(producto:Producto){
    this.storeService.eliminarProducto(producto)
  }

  irAProductos(){
    this.router.navigate(['/'])
  }

  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.carrito);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'pedido.xlsx');
  }

}
