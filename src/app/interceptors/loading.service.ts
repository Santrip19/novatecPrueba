import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { CargandoService } from '../servicios/cargando.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements HttpInterceptor {

  constructor(private cargandoService : CargandoService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.cargandoService.mostrarSpinner();
    return next.handle(req).pipe(
      finalize( ()=> {this.cargandoService.oculparSpinner()
      } )
    )
  }
}
