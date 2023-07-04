import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';

const routes: Routes = [
  {path: 'home',component:ProductosComponent },
  {path: 'detalleProducto/:id',component:DetalleProductoComponent },
  {path: 'carrito',component: CarritoComponent },
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
