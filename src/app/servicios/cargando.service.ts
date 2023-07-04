import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {

  constructor(private spinnerService : NgxSpinnerService) { 
  }

  mostrarSpinner(){
    this.spinnerService.show();
  }
  oculparSpinner(){
    this.spinnerService.hide();
  }
}
