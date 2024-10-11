import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ProgramaGoverno } from '../models/acao-controle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramaGovernoService {

  private apiUrl = environment.urlApi;

  constructor(private http: HttpClient) { }

  getProgramaGoverno(): Observable<ProgramaGoverno[]> {
    return this.http.get<ProgramaGoverno[]>(`${this.apiUrl}/programa-governo/listar`);
    }

}
