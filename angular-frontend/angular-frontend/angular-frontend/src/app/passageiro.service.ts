import { Passageiro } from './passageiro';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PassageiroService {

  private baseURL = "http://localhost:8080/api/v1/passageiros";

  constructor(private httpClient: HttpClient) {}

    getPassageirosList(): Observable<Passageiro[]>{
      return this.httpClient.get<Passageiro[]>(`${this.baseURL}`);
    }

    // tslint:disable-next-line: ban-types
    createPassageiro(passageiro: Passageiro): Observable<Object>{
      return this.httpClient.post(`${this.baseURL}`, passageiro);
    }
}

