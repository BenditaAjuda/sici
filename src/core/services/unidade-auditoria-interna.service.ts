import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnidadeAuditoriaInterna } from '../models/acao-controle.model';

@Injectable({
  providedIn: 'root'
})
export class UnidadeAuditoriaInternaService {

private apiUrl = environment.urlApi;

constructor(private http: HttpClient) { }

getUnidadeAuditoria(): Observable<UnidadeAuditoriaInterna[]> {
  return this.http.get<UnidadeAuditoriaInterna[]>(`${this.apiUrl}/unidade-auditoria/listar`);
  }

}
