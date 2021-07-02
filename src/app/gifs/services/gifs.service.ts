import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifResponse } from '../interfaces/search-gif-response';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 't48kTJFvKG6RtEYEstFIdENLlGwiFVWD';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';
  private limite: number = 10;

  public resultados: Gif[] | undefined = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string): void {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      localStorage.setItem('historial', JSON.stringify(this._historial));
      this._historial = this._historial.slice(0, 10);


      console.log(this._historial)
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);
    
    const url = `${this.baseUrl}/search`;
    this.http.get<SearchGifResponse>(url, { params })
      .subscribe((resp: any) => {
        console.log(resp.data)

        this.resultados = resp.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      });
  }
  constructor(private http: HttpClient) {
    if (localStorage.getItem('historial')) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    this.resultados = JSON.parse(localStorage.getItem('resultado')!);
  }
}
