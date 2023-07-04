import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { StoreService } from 'src/app/servicios/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  verMenu : boolean = false
  contador : number = 0;
  categorias: string[] =[];
  constructor(
    public storeService: StoreService,
    public router : Router) { }

  ngOnInit(): void {
    this.getCarrito()
    this.obtenerCategorias()
  }
  
  async obtenerCategorias(){
    this.storeService.categoriasOb$.subscribe(categorias =>{
      this.categorias = categorias
    }, error => {
      console.log(console.log(error));
    })
    
  }

  getCarrito(){
    this.storeService.carrito$.subscribe(() =>{
      this.contador = this.storeService.cantidadTotal;
    }, error => {
      console.log(console.log(error));
    })
  }

  irAlCarrito(){
    this.router.navigate(['/carrito'])
  }

  irCategoria(){
    this.menu()
    this.router.navigate(['/'])
  }

  menu(){
    this.verMenu = !this.verMenu
  }
  // filtrar(categoria:string){
  //   this.storeService.filtrarPorCategoria( categoria)
  //   this.verMenu = false
  // }
 

}
