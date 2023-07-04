  import {  Component, Input, OnInit } from '@angular/core';
  import { Slick } from "ngx-slickjs";
import { Producto } from 'src/app/modelos/producto.modelo';


  @Component({
    selector: 'app-carrusel',
    templateUrl: './carrusel.component.html',
    styleUrls: ['./carrusel.component.scss']
  })
  export class CarruselComponent implements OnInit {
    @Input() productos : Producto[]= []
  
    
    config: Slick.Config = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000 
    }
    
    ngOnInit(): void {
    }
    
   
   
    
  }