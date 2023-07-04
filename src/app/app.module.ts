import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { NgxSlickJsModule } from "ngx-slickjs";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { PipesModule } from './pipes/pipes.module';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { LoadingService } from '../app/interceptors/loading.service';

import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CargandoService } from './servicios/cargando.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductosComponent,
    HeaderComponent,
    DetalleProductoComponent,
    CarruselComponent,
    CarritoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgxSlickJsModule.forRoot(),
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingService,
 multi: true
    },
    CargandoService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
