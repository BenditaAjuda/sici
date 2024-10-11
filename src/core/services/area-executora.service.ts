import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AreaExecutora } from '../models/acao-controle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaExecutoraService {

  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) { }

  getAreaExecutora(): Observable<AreaExecutora[]> {
    return this.http.get<AreaExecutora[]>(`${this.apiUrl}/area-executora/listar/1`);
    }

}
