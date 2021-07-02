import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {
  
  //private resultado = JSON.parse(localStorage.getItem('resultado')!) || [];
  get resultados(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService: GifsService) { 
    //gifsService.buscarGifs(this.resultado);
  }

}
