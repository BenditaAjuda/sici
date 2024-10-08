import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcaoControle } from '../models/acao-controle.model';

@Injectable({
  providedIn: 'root'
})
export class AcaoControleService {

  private apiUrl = environment.urlApi;

constructor(private http: HttpClient) { }

getAcaoControle(): Observable<AcaoControle[]> {
  return this.http.get<AcaoControle[]>(`${this.apiUrl}/acao-controle/listar`);
}

}
