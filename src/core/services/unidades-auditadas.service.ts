import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadesAuditada } from '../models/acao-controle.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadesAuditadasService {

  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) { }

  getUnidadeAuditoria(): Observable<UnidadesAuditada[]> {
    return this.http.get<UnidadesAuditada[]>(`${this.apiUrl}/unidade-auditada/listar`);
    }

}
