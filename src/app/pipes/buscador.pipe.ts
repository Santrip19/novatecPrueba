import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(array: any[], texto: string): any[] {
    if (texto == '' || texto == ' ') {
      return array
    }
    return array.filter(item  =>{
      return item.title.toLowerCase().includes(texto.toLowerCase())
    })
    
    
  }

}
