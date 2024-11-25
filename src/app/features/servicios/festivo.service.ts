import { diaFestivo } from './../../core/entidades/festivo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url= `${environment.urlBase}festivo/`;
  }

  public verificar(anno: number, mes: number, dia: number): Observable<any>{
    return this.http.get(`${this.url}verificar/${anno}/${mes}/${dia}`,  {responseType: 'text'});
  }

  public obtener(dato: number): Observable<diaFestivo[]>{
    return this.http.get<diaFestivo[]>(`${this.url}obtener/${dato}`);
  }

}
