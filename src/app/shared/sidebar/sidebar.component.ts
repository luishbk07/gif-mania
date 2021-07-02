import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial(){
    return this.gifsService.historial;
  }

  buscar(termino: string){    
    if(termino === ''){
      return;
    }
    console.log(termino);

    this.gifsService.buscarGifs(termino);

  }

  constructor(private gifsService: GifsService) {
  }
}
