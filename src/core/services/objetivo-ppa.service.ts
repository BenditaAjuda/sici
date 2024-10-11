import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ObjetivoPpa, ProgramaGoverno } from '../models/acao-controle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoPpaService {

  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) { }

  getObjeticoPPA(): Observable<ObjetivoPpa[]> {
    return this.http.get<ObjetivoPpa[]>(`${this.apiUrl}/objetivo-ppa/listar/6201`);
    }

}
